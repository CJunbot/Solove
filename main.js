/*Navigation bar Toggle*/
const toggle = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

/*Main image Slide*/
var ul = document.querySelector('.slide_wrap');

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');


function move(){

    var curIndex = 0;

    let = slide_timer = setInterval(function callback(){

        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+1000*(curIndex+1)+"px, 0px, 0px)";
    
        curIndex++;
        
        if(curIndex === 4){
            setTimeout(function(){
            ul.style.transition = '0s';
            ul.style.transform = "translate3d(0px, 0px, 0px)"; },201)
            curIndex = 0;
        }
    },3500); 
/*Main image Slide Button*/
    function btn1(){
        ul.style.transform = "translate3d(0px, 0px, 0px)"
        curIndex = 0
    }
    button1.addEventListener('click', btn1);

    function btn2(){
        ul.style.transform = "translate3d(-1000px, 0px, 0px)";
        curIndex = 1;
    }
    button2.addEventListener('click', btn2);

    function btn3(){
        ul.style.transform = "translate3d(-2000px, 0px, 0px)";
        curIndex = 2;
    }
    button3.addEventListener('click', btn3);

    function btn4(){
        ul.style.transform = "translate3d(-3000px, 0px, 0px)";
        curIndex = 3;
    }
    button4.addEventListener('click', btn4);

}
document.addEventListener("DOMContentLoaded",function(){move();});

