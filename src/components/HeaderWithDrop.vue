<template>
    <main>
        <header>
            <nav>
                <h1 class="logo">Logo</h1>
                <ul class="menu">
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Services</a>
                    <ul class="submenu">
                        <li><a href="">Weight tracker</a></li>
                        <li><a href="">Workout duration</a></li>
                        <li><a href="">Calories burned</a></li>
                        <li><a href="">Personal Records</a></li>
                    </ul>
                </li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    </main>
</template>

<style scoped>
    main{
        height: 100%;
        color:aqua;
    }
    ul{
        list-style: none;
    }
    header{
        background-color: #2c3e59;
        padding: 2rem 0;
    }
    header nav{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu li{
        position: relative;
    }
    .menu > li, .menu > a{
        display: inline-block;
    }
    .menu a{
        text-decoration: none;
        color:#fff;
        display: block;
        padding: 10px 1.5rem;
        transition: all 0.3s;
    }
    .menu a:hover{
        background-color: #f34949;
        color:#fff;
    }
    /* submenu */

    .submenu{
        position: absolute;
        background-color: #2c3e50;
        top: 170%;
        width: 140px;
        left: 0;
        display: none;
    }
    .menu li:hover > .submenu{
        display: block;
    }
</style>