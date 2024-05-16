<template>
    <main @click.stop>
      <header>
        <div class="navbar">
          <div class="logo">
            <router-link to="/starting-page">ChartCoach</router-link>
          </div>
          <ul class="links">
            <li><router-link to="/starting-page">Home</router-link ></li>
                <li>
                    <router-link to="/set-user">Account</router-link>
                </li>
            <li @click="toggleSubmenu"><a @click.prevent href="#">Services <svg style="height: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#66fcf1" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></a>
              <!-- PC MENU -->
                <Transition name="fade">
                    <ul class="submenu" v-if="submenuVisible" @click.stop>
                      <li>
                        <router-link to="/biceps">Biceps curls</router-link>
                      </li>
                      <li>
                        <router-link to="/skull">Skull crusher</router-link>
                      </li>
                      <li>
                        <router-link to="/chest">Chest press</router-link>
                      </li>
                      <li>
                        <router-link to="/stop-watch">StopWatch</router-link>
                      </li>
                        <li>
                          <router-link to="/weight">Weight tracker</router-link>
                        </li>
                        <li>
                          <router-link to="/duration">Workout duration</router-link>
                        </li>
                        <li>
                          <router-link to="/calories">Calories burned</router-link>
                        </li>
                    </ul>
                </Transition>
                </li>
                
              <li><router-link to="/about">About</router-link></li>

          </ul>
          <div class="toggle_btn" @click="toggleMenu">
                <p class="spec" v-if="!dropDownMenuVisible">|||</p>
                <p v-else>X</p>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-if="dropDownMenuVisible" class="dropDown">
          <li><router-link to="/starting-page">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
            <li @click="toggleSubmenu"><a href="#">Services <svg style="height: 16px; margin-left: 2px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#66fcf1" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></a>
              <ul class="submenu" v-if="submenuVisible" @click.stop>
                      <li>
                        <router-link to="/biceps">Biceps curls</router-link>
                      </li>
                      <li>
                        <router-link to="/skull">Skull crusher</router-link>
                      </li>
                      <li>
                        <router-link to="/chest">Chest press</router-link>
                      </li>
                      <li>
                        <router-link to="/stop-watch">StopWatch</router-link>
                      </li>
                        <li>
                          <router-link to="/weight">Weight tracker</router-link>
                        </li>
                        <li>
                          <router-link to="/duration">Workout duration</router-link>
                        </li>
                        <li>
                          <router-link to="/calories">Calories burned</router-link>
                        </li>
                    </ul>
            </li>
            <li>
                    <router-link to="/set-user">Account</router-link>
                </li>
        </div>
      </header>
    </main>
  </template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dropDownMenuVisible = ref(false);
const submenuVisible = ref(false);

function toggleMenu(){
  dropDownMenuVisible.value = !dropDownMenuVisible.value;
}

function toggleSubmenu(){
  submenuVisible.value = !submenuVisible.value;
}

const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropDown');
  const submenu = document.querySelector('.submenu');
  if (dropdown && !dropdown.contains(event.target)) {
    dropDownMenuVisible.value = false;
  }
  if(submenu && !submenu.contains(event.target)) {
    submenuVisible.value = false;
  }
}


onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>


<style scoped>

.links li{
    list-style: none;
    position: relative;
    font-weight: 600;
}
.links li a{
    text-decoration: none;
    color:#fff;
    font-size: 1rem;
}
.links li a:hover{
    color: #66f1fc;
}
.link li a svg{
    height: 10px;
}
main{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
}
header{
    position: relative;
    padding: 0 2rem;
    width: 100%;
    background: rgba(0,0,0,0.6);
    border-bottom: 1px solid #66f1fc;
}
.navbar{
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color:#fff;
}
.navbar .links{
    display: flex;
    gap: 2rem;
}
.navbar .toggle_btn{
    color:#fff;
    font-size: 2rem;
    cursor: pointer;
    display: none;
    opacity: 0;
    visibility: hidden;
}

.spec{
    transform: rotate(90deg);
}
.dropDown{
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 300px;
    background: rgba(0,0,0,0.9);
    border: 1px solid #66f1fc;
    border-radius: 10px;
    transition: 0.5s;
}

.dropDown li{
    list-style: none;
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.2s;
    cursor: pointer;
    border-radius: 10px;
    position: relative
}
.dropDown li:hover{
    background-color: #1d7379;
}
.dropDown li a{
    text-decoration: none;
    color:#fff;
}

.submenu  li {
  list-style: none;
  padding: 10px 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.2s;
  border-radius: 10px;

}

.submenu ul li:hover {
  background-color: #1d7379;
}

@media(max-width: 767px){
    .navbar .links{
        display: none;
        visibility: hidden;
        opacity: 0;
    }
    .navbar .toggle_btn{
        display: block;
        opacity: 1;
        visibility: visible;
    }
   
    
}
@media(max-width: 576px){
    .dropDown{
        left: 2rem;
        width: unset;
    }
}
@media(min-width: 319px){
  .submenu{
    position: absolute;
    top: 210%;
    left: 0%;
    width: 100%;
    background: rgba(0,0,0,0.9);
    border: 1px solid #66f1fc;
    font-weight: 700;
    text-align: center;
    transition: 0.3s;
    border-radius: 10px;
  }
}
@media(min-width: 767px){
  .submenu{
      position: absolute;
      top: 168%;
      left: -140%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      text-align: center;
      transition: 0.3s;
      border-radius: 0px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      display: block;
      border: 1px solid #66fcf1;
      width: 300px;
    }
}
.fade-enter-from{
    transform: translateY(-10px);
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease-out;
}
.fade-enter-to, .fade-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.fade-leave-to{
  opacity: 0;
  transform: scale(0.8);
}
</style>