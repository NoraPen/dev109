var myImages =["images/dolphin1.avif", "images/dophin2.jpg", "images/dolphin3.jpg", "images/dolphin4.jpg", "images/dolphin5.webp"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

var index=0; 
var time= 4;
var timer;
var autoInterval;

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
  index=0;
 else
  index++;
 updateImage();
 reset()
} 
 

function back(){
 if (index===0)
  index=myImages.length-1;
 else
  index--;
 updateImage();
 reset()
} 

function autoSlide() {
  if (document.getElementById("auto").checked) {
    next();
  }
}

 function timerStart(){
  timer = setInterval(function() {
   document.getElementById("timer").textContent = "00:0" + (time < 10 ? "0" + time : time);
   time--;
   
   if (time <0) {
    time = 4;
   }
  }, 1000);
 }

function reset() {
 clearInterval(timer)
 time = 4;
 timerStart()
}

autoSlide = setInterval(autoSlide, 4000);

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

timerStart();
