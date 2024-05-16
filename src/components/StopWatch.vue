<template>
    <section>
      <div class="bg-container">
            <img src="/images/bg/bg4.jpg" alt="" loading="lazy">
      </div>
      <div class="container">
        <h1>Stopwatch</h1>
        <p class="time">
          <span id="minutes">{{ formattedTime(minutes) }}</span>:
          <span id="seconds">{{ formattedTime(seconds) }}</span>:
          <span id="tens">{{ formattedTime(tens) }}</span>
        </p>
        <button id="start" @click="startTimer">Start</button>
        <button id="stop" @click="stopTimer">Stop</button>
        <button id="reset" @click="resetTimer">Reset</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let minutes = ref(0);
  let seconds = ref(0);
  let tens = ref(0);
  let Interval;
  
  function startTimer() {
    clearInterval(Interval);
    Interval = setInterval(() => {
      tens.value++;
  
      if (tens.value === 100) {
        tens.value = 0;
        seconds.value++;
  
        if (seconds.value === 60) {
          seconds.value = 0;
          minutes.value++;
        }
      }
    }, 10);
  }
  
  function stopTimer() {
    clearInterval(Interval);
  }
  
  function resetTimer() {
    clearInterval(Interval);
    tens.value = 0;
    seconds.value = 0;
    minutes.value = 0;
  }
  
  function formattedTime(time) {
    return time < 10 ? '0' + time : time;
  }
</script>

<style scoped>
 section {
      width: 100%;
      height: 100vh;
      background-color: #292828;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .bg-container {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100vh;
    }
    .bg-container img{
      background-repeat: no-repeat;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .container {
      padding: 1rem;
      width: 400px;
      text-align: center;
      position: relative;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.8);
      border: 1px solid #66fcf1;
    }

    .time {
      padding: 1rem 0;
      font-size: 2rem;
    }
    

    .time span {
      display: inline-block;
      width: 2ch; 
      text-align: center;
    }

    h1,
    p {
      color: #f8f8f8;
    }

    button {
      padding: 0.4rem 1rem;
      margin: 0 0.2rem;
      border-radius: 10px;
      border: 1px solid #f8f8f8;
    }

    button:hover {
      background-color: rgba(0, 0, 0, 0.4);
      color: #f8f8f8;
    }


    @media(min-width: 319px){
      .container{
        width: 305px;
        transition: all 0.3s;
      }
    }
    @media(min-width: 420px){
      .container{
        width: 400px;
      }
    }
</style>