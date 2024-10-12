var drumnumber = document.querySelectorAll(".kit").length;

for(var i=0; i<drumnumber; i++){
    document.querySelectorAll(".kit")[i].addEventListener("click" , function (){
        var buttonHTML = this.innerHTML;
        makesound(buttonHTML);
        buttonAnimation(buttonHTML);
      });
}
 
document.addEventListener("keypress" , function(event){
  
  makesound(event.key);
buttonAnimation(event.key);
})

function makesound(key){
    switch (key) {
        case "a":
          var tom1 = new Audio("tom-1.mp3");
          tom1.play();
          break;
    
        case "s":
          
          var tom2 = new Audio("tom-2.mp3");
          tom2.play();
         
          break;
    
        case "d":
          var tom3 = new Audio("tom-3.mp3");
          tom3.play();
          break;
    
        case "f":
          var tom4 = new Audio("tom-4.mp3");
          tom4.play();
          break;
    
        case "g":
          var snare = new Audio("snare.mp3");
          snare.play();
          break;
    
        case "h":
          var crash = new Audio("crash.mp3");
          crash.play();
          break;
    
        case "j":
          var kick = new Audio("kick-bass.mp3");
          kick.play();
          break;
    
    
        default: console.log(buttonHTML);
    }
}


function buttonAnimation(currentKey){
  var activeElement = document.querySelector("." + currentKey);
  activeElement.classList.add("pressed");

  setTimeout(function(){
    activeElement.classList.remove("pressed");
  },100)
}
