<template>
    <section>
        <div class="container">
            <img src="/images/bg/bg5.jpg" alt="" loading="lazy">
        </div>

        <main>
            <div class="title">
                <h3>About ChartCoach</h3>
            </div>
            <div class="aboutAppText">
                <ul>
                    <li>
                        <p><strong>- ChartCoach</strong> is your personal fitness companion, designed to help you optimize your workouts and achieve your fitness goals.</p>
                    </li>
                    <li>
                        <p> <strong>- With ChartCoach</strong> , you can easily track your daily workouts and monitor your progress over time. Whether you're a beginner or an experienced athlete, our app provides personalized recommendations tailored to your fitness level.</p>
                    </li>
                    <li>
                        <p> <strong>- Take advantage</strong> of our built-in stopwatch feature to time your workouts with precision.</p>
                    </li>
                    <li>
                        <p> <strong>- Visualize your performance</strong> data with detailed charts and tables, allowing for accurate analysis and insights into your fitness journey.</p>
                    </li>
                    <li>
                        <p> <strong>- ChartCoach</strong> is designed to be responsive, ensuring seamless usage across all your devices, from desktops to mobile phones.</p>
                    </li>
                    <li>
                        <p> <strong>- Enjoy the simplicity</strong> and user-friendly interface of ChartCoach, making it easy for users of all levels to navigate and utilize its features.</p>
                    </li>
                </ul>
            </div>
            <div class="warning">
                <p>Disclaimer: ChartCoach is a fitness tracking tool and is not liable for any injuries resulting from the use of the app. Always consult with a healthcare professional before starting any new fitness program.</p>
            </div>
            <div class="copyRight">
                <p>&copy; 2024 ChartCoach. All rights reserved.</p>
            </div>
        </main>
    </section>
</template>

<style scoped>
/* 
        #0B0C10: rgba(11, 12, 16, 1)
        #1F2833: rgba(31, 40, 51, 1)
        #C5C6C7: rgba(197, 198, 199, 1)
        #66FCF1: rgba(102, 252, 241, 1)
        #45A29E: rgba(69, 162, 158, 1)
*/
    section {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        height: 700px;
        width: 800px;
        padding: 20px;
        border-radius: 10px;
        background-color: rgba(31, 40, 51, 0.8);
        border: 1px solid #66fcf1;
        box-shadow: rgba(102, 252, 241, 0.2) 0px 20px 30px -10px;
        color:#fff;
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
    strong{
        color:rgb(59, 209, 202);
    }
    .title {
        margin-bottom: 40px;
        text-align: center;
    }

    .title h3 {
        color: #66fcf1;
        font-size: 24px;
    }

    .aboutAppText ul {
        list-style-type: none;
        padding: 0;
    }

    .aboutAppText li {
        margin-bottom: 15px;
    }

    .aboutAppText p {
        font-size: 18px;
        line-height: 1.5;
    }

    .warning p {
        font-size: 14px;
        color: #ff6347;
    }

    .copyRight {
        text-align: center;
        margin-top: 20px;
    }

    .copyRight p {
        font-size: 14px;
        color: rgba(197, 198, 199, 1);
    }

    @media (min-width: 319px){
        main{
            width: 305px;
            overflow-y: auto;
            margin-top: 50px;
            transition: all 0.3s;
        }
        .aboutAppText p {
            font-size: 16px;
        }
    }
    @media (min-width: 374px){
        main{
            width: 350px;
            margin-top: 50px;
        }
    }
    @media (min-width: 767px){
        main{
            height: 700px;
            width: 500px;
        }
    }
    @media (min-width: 1023px){
        main{
            height: 700px;
            width: 800px;
            margin-top: 0;
        }
    }

   
</style>
