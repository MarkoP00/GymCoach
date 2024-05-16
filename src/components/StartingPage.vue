<template>
    <section>
        <div class="container">
            <img src="/images/bg/bg2.jpg" alt="">
        </div>
        <main>
            <div class="mainContentDiv">
                <div class="text">
                    <div class="title">
                        <h2>Achieve your <strong>fitness goals</strong> with us!</h2>
                    </div>
                    <div class="aboutApp">
                        <h3>Our app allows you to track:</h3>
                    </div>
                    <div class="listOfServices">
                            <div class="list">
                                <ul>
                                    <li class="line-1 anim-typewriter">Weight</li>
                                    <li class="line-1 anim-typewriter">Workout duration</li>
                                    <li class="line-1 anim-typewriter">Calories burned</li>
                                    <li class="line-1 anim-typewriter">Exercise performing</li>
                                    <li class="line-1 anim-typewriter">Exercise intensity</li>
                                </ul>
                            </div>
                            <div class="getStarted">
                                <h3>We dont know for any <strong>exuces!</strong></h3>
                                <h3>Do not waste your <strong>time!</strong></h3>
                                <h3>Make yourself <strong>proud!</strong></h3>
                                <h3>Success starts with     <strong>self-discipline!</strong></h3>
                                <div class="getButton">
                                <router-link to="/set-user">Get started!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>  
</template>

<style scoped>
section {
    min-height: 100vh;
    width: 100%;
}
main{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
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

.mainContentDiv{
    color:#fff;
}
.text{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

strong{
    color: rgba(255, 255, 0,1);
}
.listOfServices{
    display: flex;
    justify-content: space-between;
    align-items: top;
    font-size: 1.5rem;
}
.getButton{
    display: flex;
    justify-content: center;
    align-items: center;
}
.getButton a {
    padding: 10px 20px;
    border: none;
    background-color: rgba(255, 255, 0, 0.4);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

.getButton a:hover {
    background-color: rgba(255, 255, 0, 0.3);
}
.line-1{
    position: relative;
    width: 24rem;
    color:rgba(255, 255, 0,1);
    border-right: 2px solid rgba(255, 255, 0,1);
    font-size: 110%;
    white-space: nowrap;
    list-style: none;
    overflow: hidden;
}


.anim-typewriter{
  animation: typewriter 4s steps(34) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
    margin-top: 5px;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 24rem;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255, 255, 0,1)}
  to{border-right-color: transparent;}
}

@media (min-width: 319px){
.mainContentDiv{
    padding: 30px;
}
.title h2{
    font-size: 1.5rem;
}
.aboutApp h3{
    font-size: 1.2rem;
}
.aboutApp{
    margin: 0;
}
.listOfServices{
    flex-direction: column;
    gap: 20px;
}
.line-1{
    font-size: 70%;
}
.getStarted{
    font-size: 1.2rem;
}
.getButton{
    display: flex;
    justify-content: left;
    margin-top: 20px;
}
.getButton a{
    background-color: rgba(255, 255, 0, 0.8);
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 14rem;}
}
}

@media (min-width: 374px){
.mainContentDiv{
    padding: 40px;
}
.title h2{
    font-size: 1.6rem;
}

.line-1{
    font-size: 80%;
}
.getStarted{
    font-size: 1.2rem;
}
.getButton{
    display: flex;
    justify-content: left;
    margin-top: 20px;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 16rem;}
}
}

@media (min-width: 767px){
.mainContentDiv{
    padding: 20px;
}
.title h2{
    font-size: 2rem;
    text-align: center;
}
.aboutApp h3{
    font-size: 1.5rem;
}
.aboutApp{
    margin: 0;
}
.listOfServices{
    flex-direction: column;
    gap: 20px;
}
.line-1{
    font-size: 100%;
}
.getStarted{
    font-size: 1.5rem;
}
.getButton{
    display: flex;
    justify-content: left;
    margin-top: 20px;
}
.getButton a{
    background-color: rgba(255, 255, 0, 0.6);
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 24rem;}
}
}
@media (min-width: 1023px){
.mainContentDiv{
    padding: 20px;
}
.title h2{
    font-size: 3rem;
    text-align: left;
}
.aboutApp h3{
    font-size: 2rem;
}
.aboutApp{
    margin: 0;
}
.listOfServices{
    flex-direction: row;
    gap: 20px;
}
.line-1{
    font-size: 100%;
}
.getStarted{
    font-size: 1.5rem;
}
.getButton{
    display: flex;
    justify-content: left;
    margin-top: 20px;
}
.getButton a{
    background-color: rgba(255, 255, 0, 0.4);
}
}

@media (min-width: 1250px){
.mainContentDiv{
    padding: 20px;
}
.title h2{
    font-size: 4rem;
    text-align: left;
}
.aboutApp h3{
    font-size: 2.5rem;
}
.aboutApp{
    margin: 0;
}
.listOfServices{
    flex-direction: row;
    gap: 20px;
}
.line-1{
    font-size: 120%;
}
.getStarted{
    font-size: 1.6rem;
}
.getButton{
    display: flex;
    justify-content: left;
    margin-top: 20px;
}
}
</style>
