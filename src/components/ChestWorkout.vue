<template>
    <section>
      <main>
        <!-- Exercise and muscle pictures -->
        <h1>Chest press</h1>
        <div class="muscleImage">
          <div class="muscleMain">
            <div class="muscleTitle">
              <h2>Muscle target (chest)</h2>
            </div>
            <div class="muscleimg">
              <img src="/images/chest/chest2.jpeg" alt="" loading="lazy" />
              <img src="/images/chest/chest1.jpeg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <!-- App recommendation program and chart -->
        <!-- chart -->
        <div class="app" v-if="appChartVisible">
          <h2>App recommendation</h2>
          <div class="appChart">
            <canvas></canvas>
          </div>
        </div>
        <!-- table -->
        <div class="table" v-if="appChartVisible">
          <div class="tableWeight">
            <table>
              <tbody>
                <tr>
                  <td class="title"  style="color: rgba(255, 255, 0, 1);">Weights</td>
                  <td v-for="element in appWeight" :key="element">
                    {{ element }}kg
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="title" style="color: rgba(102, 252, 241, 1);">Reps</td>
                  <td v-for="element in appReps" :key="element">
                    {{ element }} reps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- User chart interface -->
        <div class="weightMain">
          <h2>Track your progress</h2>
          <div class="weightWindow">
            <div class="current">
              <span>{{ currentWeight.weight }}</span>
              <small>Chest press <br />(kg)</small>
            </div>
            <form @submit.prevent="addWeight">
              <div class="weightInput first">
                <label for="inp1">Chest press weight (kg)</label>
                <input type="number" step="0.1" v-model="weightInput" placeholder="Dumbbell weight" id="inp1" />
              </div>
              <div class="weightInput second" style="margin-bottom: 20px;">
                <label for="inp2">Reps (in set)</label>
                <input type="number" step="0.1" v-model="secondWeightInput" placeholder="Reps" id="inp2" />
              </div>
              <div class="weightButton">
                <button>Add to chart</button>
              </div>
            </form>
          </div>
        </div>
        <!-- chart and chart histore -->
        <div v-if="weights && weights.length > 0">
          <h2>Your results</h2>
          <div class="canvas-box">
            <canvas ref="weightChartEl"></canvas>
          </div>
  
          <div class="weight-history">
            <h2>Exercise History</h2>
            <ul>
              <li v-for="weight in weights" :key="weight">
                <span>{{ weight.weight }} kg</span>
                <span>{{ weight.secondData }} reps</span>
                <small>{{ new Date(weight.date).toLocaleDateString() }}</small>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
</template>
  
<script setup>
  import { ref, shallowRef, computed, watch, nextTick, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import fetchService from '../service/fetchService.js';
  
  //  user chart logic
  const weights = ref([]);
  const weightChartEl = ref(null);
  const weightChart = shallowRef(null);
  
  const weightInput = ref(0);
  const secondWeightInput = ref(0);
  const currentWeight = computed(() => {
    const sortedWeights = [...weights.value].sort((a, b) => b.date - a.date);
    return sortedWeights[0] || { weight: 0 };
  });
  
  const addWeight = () => {
    weights.value.push({
      weight: weightInput.value,
      secondData: secondWeightInput.value, 
      date: new Date().getTime(),
    });
  };

  watch(
    weights,
    newWeights => {
      const ws = [...newWeights];
      nextTick(() => {
        if (weightChart.value) {
          weightChart.value.destroy();
        }
        weightChart.value = new Chart(weightChartEl.value.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ws.sort((a, b) => a.date - b.date).map(w => new Date(w.date).toLocaleDateString()),
            datasets: [
              {
                label: 'Dumbell weight',
                data: ws.sort((a, b) => a.date - b.date).map(w => w.weight),
                backgroundColor: 'rgba(255, 255, 0, 0.2)',
                borderColor: 'rgba(255, 255, 0, 1)',
                borderWidth: 1,
                fill: true,
              },
              {
                label: 'Reps in one set',
                data: ws.sort((a, b) => a.date - b.date).map(w => w.secondData),
                backgroundColor: 'rgba(102, 252, 241, 0.1)',
                borderColor: 'rgba(102, 252, 241, 1)',
                borderWidth: 1,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      });
    },
    { deep: true }
  );
  //App chart lgoic
  const appWeight = ref([]);
  const appReps = ref([]);
  const appChartVisible = ref(false);
  //get app data
  async function getAppContent() {  
    const level = localStorage.getItem('userlevel');
        if(!level){
            return
        }
    appChartVisible.value = true;
    const response = await fetchService.get(`${level}.json`);
    
    if (response) {
      const user = Object.keys(response);
      const chestPress = response[user].data.chestPress;
      if (chestPress) {
        const weightConverted = Object.values(chestPress.appRecomendationWeight);
        appWeight.value = weightConverted;

        const repsConverted = Object.values(chestPress.appRecomendationReps);
        appReps.value = repsConverted;

        const canvas = document.querySelector('.appChart canvas');
        new Chart(canvas.getContext('2d'), {
          type: 'bar',
          data: {
            labels: weightConverted.map((_, index) => `Set ${index + 1}`),
            datasets: [
              {
                label: 'Weight (kg)',
                data: weightConverted,
                backgroundColor: 'rgba(255, 255, 0, 0.2)',
                borderColor: 'rgba(255, 255, 0, 1)',
                borderWidth: 1,
                fill: true,
              },
              {
                label: 'Reps in one set',
                data: repsConverted,
                backgroundColor: 'rgba(102, 252, 241, 0.2)',
                borderColor: 'rgba(102, 252, 241, 1)',
                borderWidth: 1,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }
  
  onMounted(() => {
    getAppContent();
  });
</script>

<style scoped>
section {
    display: flex;
    min-height: 100vh;
    justify-content: center;
}

main {
	padding: 1.5rem;
    width: 1000px;
    transition: 0.3s all ;
}

main h1 {
	text-align: center;
	margin-bottom: 2rem;
    color:#fff;
}

main h2 {
	margin-bottom: 1rem;
	color: #C5C6C7;
	font-weight: 400;
}

.weightWindow{
	background-color:  rgba(255, 255, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 0, 1);
    margin-bottom: 1rem;
}
.muscleImage {
    margin-bottom: 2rem;
}

.muscleMain {
    background-color: #1F2833;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.muscleTitle h2 {
    color: rgba(255, 255, 0, 1);
    margin-bottom: 1rem;
}

.muscleimg {
    display: flex;
    justify-content: space-between;
}

.muscleimg img {
    width: 48%; 
    border-radius: 0.5rem; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8); 
}
main .current {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	text-align: center;
	background-color: rgba(255, 255, 0, 0.2);
	border-radius: 999px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 5px solid rgba(255, 255, 0, 1);
	margin: 0 auto 2rem;
    pointer-events: none;
    font-weight: 600;

}

main .current span {
	display: block;
	font-size: 2em;
	font-weight: bold;
	margin-bottom: 0.5rem;
	color: #fff;
}

main .current small {
	color: #fff;
	font-style: italic;
}

main form {
	display: flex;
	margin-bottom: 2rem;
	border-radius: 0.5rem;
	overflow: hidden;
	transition: 200ms linear;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-direction: column;
}

form input{
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding-left: 20px;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 20px;
    border: 1px solid #fff;
}

form button{
    padding: 10px 15px;
    background-color: rgba(255, 255, 0, 0.3);
    border: 1px solid rgba(255, 255, 0, 1);
    border-radius: 10px;
    color:#fff;
    font-weight: 600;
    transition: 0.2s all
}
form button:hover{
    cursor: pointer;
    background-color: rgba(255, 255, 0, 0.8);
}
main .canvas-box, .weight-history ul, .appChart {
	width: 100%;
	background-color: #1F2833;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
    height: 300px;
    border: 1px solid rgba(255, 255, 0, 1);

}
.table{
    width: 100%;
	background-color: #1F2833;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
}
.tableWeight table {
    border-collapse: collapse;
    width: 100%;
}

.tableWeight td {
    border: 1px solid #fff; 
    text-align: center; 
    color: #fff; 
    padding: 8px;
}


.tableWeight .title {
    font-weight: bold; 
}
.appChart{
    margin-bottom: 2rem;
}
.weight-history ul{
    max-height: 500px;
    overflow-y: auto;
}
.weight-history ul::-webkit-scrollbar {
    width: 12px;
}

.weight-history ul::-webkit-scrollbar-track {
    background: #1F2833; 
}

.weight-history ul::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 0, 0.2); 
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 0, 1);
}
main .weight-history ul li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;
}

main .weight-history ul li {
    background-color: rgba(255, 255, 0, 0.2);
    color:#fff;
    border-radius: 5px;
    margin: 15px;
    border: 1px solid rgba(255, 255, 0, 1);
}
.first input{
    border: 1px solid rgba(255, 255, 0, 1);

}
.first label{
    color:rgba(255, 255, 0, 1);
}
.second input{
    border: 1px solid rgba(102, 252, 241, 1);

}
.second label{
    color:rgba(102, 252, 241, 1)
}
main .weight-history ul li:nth-child(even) {
	background-color: rgba(255, 255, 0, 0.4);
}
main .weight-history ul li:hover{
    background-color: rgba(255, 255, 0, 0.5);
}
main .weight-history ul li span {
	display: block;
	font-size: 1.25rem;
	font-weight: 700;
	margin-right: 1rem;
}
main .weight-history ul li small {
	color: #fff;
	font-style: italic;
}

@media (min-width: 319px){
    main{
        width: 340px;
        margin-top: 50px;
    }
    main h1{
        font-size: 1.5rem;
    }
    form button{
        white-space: nowrap;
    }
    .weightInput {
        width:70%;
        color:#fff;
    } 
    .table{
        display: none;
        opacity: 0;
        visibility: hidden;
    } 
}
@media (min-width: 374px){
    main{
        width: 370px;
    }
    
}
@media (min-width: 424px){
    main{
        width: 500px;
    } 
}
@media (min-width: 767px){
    main{
        width: 1000px;
    } 
    main h1{
        font-size: 2rem;
    }
    .weightInput {
        width:50%;
        color:#fff;
    }
    .table{
        display: block;
        opacity: 1;
        visibility: visible;
    }
}
@media (min-width: 1023px){
    .weightInput {
    width:30%;
    color:#fff;
}
}
</style>