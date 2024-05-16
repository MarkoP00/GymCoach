import { createRouter, createWebHashHistory } from "vue-router";
import StartingPage from './components/StartingPage.vue';
import SetUser from './components/SetUser.vue';
import BicepsCurl from './components/BicepsCurl.vue'; 
import SkullCrusher from './components/SkullCrusher.vue'; 
import ChestWorkout from './components/ChestWorkout.vue'; 
import WeightChart from './components/WeightChart.vue'; 
import WorkoutDuration from './components/WorkoutDuration.vue'; 
import CaloriesBurn from './components/CaloriesBurn.vue'; 
import StopWatch from './components/StopWatch.vue'; 
import AboutPage from "./other/AboutPage.vue";
const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: StartingPage
        },
        {
            path: '/starting-page',
            component: StartingPage
        },
        {
            path: '/set-user',
            component: SetUser
        },
        {
            path: '/biceps',
            component: BicepsCurl
        },
        {
            path: '/skull',
            component: SkullCrusher
        },
        {
            path: '/chest',
            component: ChestWorkout
        },
        {
            path: '/weight',
            component: WeightChart
        },
        {
            path: '/duration',
            component: WorkoutDuration
        },
        {
            path: '/calories',
            component: CaloriesBurn
        },
        {
            path: '/stop-watch',
            component: StopWatch
        },
        {
            path: '/about',
            component: AboutPage
        }
    ]
})

export default router
