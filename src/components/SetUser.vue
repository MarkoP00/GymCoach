<template>
  <GlobPopup v-if="popTitle" style="background-color: rgba(0,0,0,0.5)" :title="popTitle" :message="popMessage" @close-event="closePopup"></GlobPopup>
  <GlobSpinner v-if="spinnerIsActive"></GlobSpinner>
    <section>
      <div class="container">
            <img src="/images/bg/bg3.jpg" alt="" loading="lazy">
        </div>
      <div class="mainContainer">
        <Transition name="fade">
        <form @submit.prevent action="" v-if="formVisible">
          <div class="title">
            <h3>Your Profile</h3>
          </div>
          <div class="aboutUser">
            <div class="inputBox" :class="{wrong : formData.name.invalid === true}">
              <label for="name">Your Name</label>
              <input type="text" placeholder="John Doe..." id="name" autocomplete="off" v-model="formData.name.value" @blur="formData.name.invalid = false">
            </div>
            <div class="inputBox" :class="{wrong : formData.age.invalid === true}">
              <label for="age">Your Age (years)</label>
              <input type="number" placeholder="25" id="age" autocomplete="off" v-model="formData.age.value" @blur="formData.age.invalid = false">
            </div>
          </div>
          <div class="options">
            <label for="gender">Gender</label>
            <select name="Gender" id="gender" v-model="formData.gender.value">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="goal">
            <h3>Your level</h3>
            <div class="radioOptions">
              <div>
                <input type="radio" name="goal" id="beginner" v-model="formData.level.value" value="beginner">
                <label for="beginner">Beginner</label>
              </div>
              <div>
                <input type="radio" name="goal" id="intermediate" v-model="formData.level.value" value="intermediate">
                <label for="intermediate">intermediate</label>
              </div>
              <div>
                <input type="radio" name="goal" id="professional" value="professional" v-model="formData.level.value">
                <label for="professional">Professional</label>
              </div>
            </div>
          </div>
          <div class="formButton">
            <button @click="submitData">Submit</button>
          </div>
        </form>
      </Transition>

      </div>
    </section>
</template>



<script setup>
    import { reactive,ref, onMounted } from 'vue';
    import fetchService from '../service/fetchService';
    import GlobPopup from '../global/GlobPopup.vue';
    import GlobSpinner from '../global/GlobSpinner.vue';

    const formVisible = ref(null);
    const spinnerIsActive = ref(false);
    const formData = reactive({
        name: {
            value: '',
            invalid: false
        },
        age: {
            value: '',
            invalid: false
        },
        gender: {
            value: 'male'
        },
        level: {
            value: 'beginner'
        }
    })


    const popTitle = ref('');
    const popMessage = ref('');

function validateInputs(){
  Object.keys(formData).forEach((key) => {
    if(formData[key].value === ''){
      formData[key].invalid = true
    }else if(key === 'name' && formData[key].value.length < 5 || formData[key].value.length > 20){
      formData[key].invalid = true
    }else{
      formData[key].invalid = false
    }
  })
}

async function submitData(){
  validateInputs()
  spinnerIsActive.value = true;

  const validationSuccessful = Object.keys(formData).some(key => formData[key].invalid);

  if(validationSuccessful){
    spinnerIsActive.value = false;
    return
  }

  const body = {
    username: formData.name.value,
    userage: formData.name.value,
    usergender: formData.gender.value,
    userlevel: formData.level.value,
  }
   const response = await fetchService.post('userdata.json', body);

   if(response){
    spinnerIsActive.value = false;

    localStorage.setItem('username', formData.name.value);
    localStorage.setItem('userlevel', formData.level.value);
    console.log(response);
    popTitle.value = 'Success!';
    popMessage.value = 'Our app will help you in performing your exercises!'
   }else{
    spinnerIsActive.value = false;
    popTitle.value = 'Fail!';
    popMessage.value = 'Sorry, but something went wrong :('
   }
   }

function closePopup(){
  popTitle.value = '';
  popMessage.value = '';
}

function showFrom(){
      formVisible.value = true
    }

onMounted(() => {
      showFrom()
})
</script>


<style scoped>
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: rgba(0,0,0,0.2);
    }
    .container {
      position: fixed;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100vh;
    }
    .container img{
      background-repeat: no-repeat;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    form {
      width: 500px;
      background: rgba(31, 40, 51, 0.9);
      border: 1px solid #66fcf1;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      color: #fff
    }
  
    .title {
      margin-bottom: 20px;
      color: rgba(102, 252, 241, 1);
    }
  
    .title h3 {
      font-size: 1.5rem;
      color: rgba(102, 252, 241, 1);
    }
  
    .inputBox label {
      margin-bottom: 5px;
      color: #fff;
    }
    .inputBox input::placeholder{
        color: #fff;
    }
  
    input[type="text"],
    input[type="number"],
    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      margin-bottom: 10px;
      background: rgba(69, 162, 158, 0.1);
      color: #fff;
    }
    select{
        background: rgba(69, 162, 158, 0.1);
    }
    option{
        background: rgba(69, 162, 158, 0.8);

        border-radius: 10px;
    }
    input[type="radio"] {
      margin-right: 5px;
      transform: translateY(2px);
    }
  
    .radioOptions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      margin-top: 10px;

    }
    .goal{
        display: flex;
        flex-direction: column;
    }
    .goal h3{
        color: #66fcf1;
    }
    button {
      background-color: rgba(69, 162, 158, 1);
      color: #fff;
      width: 100%;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: rgb(51, 121, 117);
    }
    .wrong input{
      border: 1px solid red;
    }
    @media(min-width: 319px){
        form{
            width: 305px;
        }
        .inputBox input, select{
            outline: none;
        }
    }
    @media(min-width: 374px){
        form{
            width: 350px;
        }
    }
    @media(min-width: 767px){
        form{
            width: 450px;
        }
    }
    @media(min-width: 1023px){
        form{
            width: 550px;
        }
    }
       .fade-enter-from{
        opacity: 0;
        transform: scale(0.6);
    }
    .fade-enter-active{
        transition: all 0.4s ease;
    }
    .fade-enter-to{
        opacity: 1;
        transform: scale(1);
    }
  </style>
  