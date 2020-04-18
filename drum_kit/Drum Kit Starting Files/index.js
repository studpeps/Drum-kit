var drumNo=document.querySelectorAll(".drum").length;
var t;
for(var i=0;i<drumNo;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   playSound(this.innerHTML);
   buttonAnimation(this.innerHTML);
});
}


//keyboard-press action

document.addEventListener("keypress",function(event){
playSound(event.key);
buttonAnimation(event.key);
});

//play-sound function

function playSound(key)
{
    switch(key){
        case 'w':t='./sounds/crash.mp3';break;
        case 'a':t='./sounds/kick-bass.mp3';break;
        case 's':t='./sounds/snare.mp3';break;
        case 'd':t='./sounds/tom-1.mp3';break;
        case 'j':t='./sounds/tom-2.mp3';break;
        case 'k':t='./sounds/tom-3.mp3';break;
        case 'l':t='./sounds/tom-4.mp3';break;
        default:alert("Not available");
    }
    var audio=new Audio(t);
    audio.play();

}

function buttonAnimation(key){
 document.querySelector("."+key).classList.add("pressed");
 setTimeout(function(){
     document.querySelector("."+key).classList.remove("pressed");},100);
}

