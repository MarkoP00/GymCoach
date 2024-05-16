<template>
    <section>
        <main>
            <h1>Track your weight</h1>
        <div class="weightWindow">
            <div class="current">
                <span>{{ currentWeight.weight }}</span>
                <small>Current weight (kg)</small>
            </div>
            <form @submit.prevent="addWeight">
                <div class="weightInput">
                    <input type="number" step="0.1" v-model="weightInput"/>
                </div>
                <div class="weightButton">
                    <button>Add weight</button>
                </div>
            </form>
        </div>
    
            <div v-if="weights && weights.length > 0">
                <h2>Last 7 days</h2>
                <div class="canvas-box">
                    <canvas ref="weightChartEl"></canvas>
            </div>
        
                <div class="weight-history">
                    <h2>Weight History</h2>
                    <ul>
                        <li v-for="weight in weights" :key="weight">
                            <span>{{ weight.weight }} kg</span>
                            <small>
                                {{ new Date(weight.date).toLocaleDateString() }}
                            </small>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </section>
    
        </template>
        
        
        <script setup>
        import { ref, shallowRef, computed, watch, nextTick } from 'vue';
        import Chart from 'chart.js/auto';
        
        const weights = ref([]);
        const weightChartEl = ref(null);
        const weightChart = shallowRef(null);
        
        const weightInput = ref(60.0);
        
        const currentWeight = computed(() => {
            const sortedWeights = [...weights.value].sort((a, b) => b.date - a.date);
            return sortedWeights[0] || { weight: 0 };
        });
        
        const addWeight = () => {
            weights.value.push({
                weight: weightInput.value,
                date: new Date().getTime()
            })
        }
        
        watch(weights, newWeights => {
        const ws = [...newWeights];
        nextTick(() => {
            if (weightChart.value) {
                weightChart.value.destroy();
            }
            // Chart data
            weightChart.value = new Chart(weightChartEl.value.getContext('2d'),{
                type:"bar",
                data: {
                    labels: ws.sort((a,b) => a.date - b.date).map(w => new Date(w.date).toLocaleDateString()),
                    datasets:[
                       {
                        label: 'Weight',
                        data: ws.sort((a,b) => a.date - b.date).map(w => w.weight),
                        backgroundColor: 'rgba(102, 252, 241, 0.2)',
                        borderColor: '#66FCF1',
                        borderWidth: 1,
                        fill: true
                       },
                       
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            })
        })
    },{deep: true})
        </script>
<style scoped>
/* 
        #0B0C10: rgba(11, 12, 16, 1)
        #1F2833: rgba(31, 40, 51, 1)
        #C5C6C7: rgba(197, 198, 199, 1)
        #66FCF1: rgba(102, 252, 241, 1)
        #45A29E: rgba(69, 162, 158, 1)
*/

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
img{
    background-image: src('/public/images/chart.png');
}
main h1 {
	font-size: 2em;
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
	background-color: #1F2833;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #66FCF1;
    margin-bottom: 1rem;
}
main .current {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	text-align: center;
	background-color: rgba(69, 162, 158, 0.3);
	border-radius: 999px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border: 5px solid #66FCF1;
	margin: 0 auto 2rem;
    pointer-events: none;
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
    border: 1px solid #6d6e6e;
    }
form button{
    padding: 10px 15px;
    background-color: rgba(69, 162, 158, 0.3);
	border: 1px solid #66FCF1;
    border-radius: 10px;
    color:#fff;
    transition: 0.2s all
}
form button:hover{
    cursor: pointer;
    background-color: rgba(69, 162, 158, 0.8);

}
main .canvas-box, .weight-history ul {
	width: 100%;
	background-color: #1F2833;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
    height: 300px;
    border: 1px solid #66FCF1;

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
    background-color: rgba(69, 162, 158, 0.2); 
    border-radius: 6px;
    border: 1px solid #66FCF1;
}
main .weight-history ul li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;
}

main .weight-history ul li {
    background-color: rgba(69, 162, 158, 0.2);
    color:#fff;
    border-radius: 5px;
    margin: 15px;
    border: 1px solid #66FCF1;
}
main .weight-history ul li:nth-child(even) {
	background-color: rgba(69, 162, 158, 0.4);
}
main .weight-history ul li:hover{
    background-color: rgba(69, 162, 158, 0.5);
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
    form button{
    white-space: nowrap;
}
}
@media (min-width: 374px){
    main{
        width: 370px;
    }
    
}
@media (min-width: 424px){
    main{
    margin-top: 100px;

        width: 500px;
    } 
}
@media (min-width: 767px){
    main{
        width: 1000px;
    } 
}
</style>