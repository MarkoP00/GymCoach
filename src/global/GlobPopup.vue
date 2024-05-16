<template>
    <section @click="closeEvent">
    <transition name="fade">
        <main @click.stop v-if="popupVisible">
            <div class="title">
                <h2>{{ props.title }}</h2>
            </div>
            <div class="message">
                <p>{{ props.message }}</p>
            </div>
            <div class="actionButton">
                <GlobalButton title="Okay!" @click="closeEvent"></GlobalButton>
            </div>
        </main>
    </transition>
    </section>
</template>

<script setup>
    import { defineProps, defineEmits ,ref, onMounted} from 'vue';
    import GlobalButton from './GlobalButton.vue';

    const emits = defineEmits(['close-event'])
    const props = defineProps({
        title: String,
        message: String
    })
    const popupVisible = ref(null);

    function closeEvent(){
        popupVisible.value = false;

        setTimeout(() => {
            emits('close-event')
        }, 400);
    }
    function showEvent(){
        popupVisible.value = true;
    }

    onMounted(() => {
        showEvent()
    })
</script>

<style scoped>
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgba(0,0,0,0.9);
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5
    }
    main{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 475px;
        background-color: rgba(31, 40, 51, 1);
        padding: 30px;
        text-align: center;
        border-radius: 10px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        border: 1px solid #66fcf1;
        transition: all 0.5s;
    }
    .title h2 {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
    }
    .message p {
        color: #fff;
        font-size: 16px;
    }
    .actionButton {
        margin-top: 20px;
    }

    @media(min-width: 375px){
        main{
            width: 345px;
        }
    }
    @media(min-width: 424px){
        main{
            width: 400px;
        }
    }
    @media(min-width: 500px){
        main{
            width: 475px;
        }
    }

    .fade-enter-from, .fade-leave-to{
        opacity: 0;
        transform: scale(0.6);
    }
    .fade-enter-active, .fade-leave-active{
        transition: all 0.4s ease;
    }
    .fade-enter-to, .fade-leave-from{
        opacity: 1;
        transform: scale(1);
    }

</style>
