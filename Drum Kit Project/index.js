
/*document.querySelector("button").addEventListener("click",function(){
    alert("I am clicked");
});*/
var drums = document.querySelectorAll(".drum");
var numOfDrums = drums.length;

//for button-press
for(var i=0;i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var soundInnerHTML = this.innerHTML;
        makeSound(soundInnerHTML);
        buttonAnimation(soundInnerHTML);
    });
}

//for key press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            alert(soundInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}