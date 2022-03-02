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
const button1_toggle = document.querySelector('.btn1 a');
const button2_toggle = document.querySelector('.btn2 a');
const button3_toggle = document.querySelector('.btn3 a');
const button4_toggle = document.querySelector('.btn4 a');

function move(){

    var curIndex = 0;

    let = slide_timer = setInterval(function callback(){

        ul.style.transition = '0.2s';
        ul.style.transform = "translate3d(-"+1000*(curIndex+1)+"px, 0px, 0px)";
        
        curIndex++;

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

    setInterval(function(){
        if(curIndex==0||curIndex==4){  
            button1_toggle.classList.add('on');
            button2_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
            }
        else if(curIndex==1){   
            button2_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
        }
        else if(curIndex==2){   
            button3_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button2_toggle.classList.remove('on');
            button4_toggle.classList.remove('on');
        }
        else if(curIndex==3){   
            button4_toggle.classList.add('on');
            button1_toggle.classList.remove('on');
            button2_toggle.classList.remove('on');
            button3_toggle.classList.remove('on');
        }
        
        if(curIndex === 4){
            setTimeout(function(){
            ul.style.transition = '0s';
            ul.style.transform = "translate3d(0px, 0px, 0px)"; },201)
            curIndex = 0;
        }
    })

}
document.addEventListener("DOMContentLoaded",function(){move();});

/*About2 Typing*/
let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["#Love is love", "#Love yourself","#Love is unity"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80); 
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);

/*Roadmap Scroll*/
var animation = function () {
    var items, winH;

    var initModule = function () {
      items = document.querySelectorAll(".content2");
      winH = window.innerHeight;
      _addEventHandlers();
    }

    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };

    var _checkPosition = function () {
      for (var g = 0; g < items.length; g++) {
        var posFromTop = items[g].getBoundingClientRect().top;
        if(winH<= posFromTop){
            items[g].classList.remove("active")
        }else if (winH - 100> posFromTop) {
            items[g].classList.add("active")
        }
      }
    }

    return {
      init: initModule
    }
  }

  animation().init();

/*FAQ Button*/
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));