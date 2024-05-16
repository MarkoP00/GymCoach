<template>
<router-view v-slot="{ Component }">
  <transition name="fade">
    <KeepAlive>
    <component :is="Component" />
    </KeepAlive>
  </transition>
</router-view>
    <TheHeader></TheHeader>
    
</template>

<script setup>
    import TheHeader from './components/TheHeader.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
} 
body{
 background: linear-gradient(160deg, #0B0C10 0%, #1F2833 100%);
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
    background-color: #1F2833;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(69, 162, 158, 0.8);
    border-radius: 10px;
}
.fade-enter-from{
        opacity: 0;
    }
    .fade-enter-active{
        transition: all 0.2s ease;
    }
    .fade-enter-to{
        opacity: 1;
    }

</style>