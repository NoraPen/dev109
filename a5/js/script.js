var myImages =["images/artifact1.png", "images/artifact2.png", "images/artifact3.png", "images/artifact4.png", "images/dolphin5.webp"];


var captionImages =[
  "Artifact 1: This assignment focused on creating a resume, where we explored various types of headings and labels to format text. We also learned the importance of using images and incorporating alt text to ensure web accessibility.",
 "Artifact 2: We built a chessboard layout using the <div> element, practicing the arrangement of images and text. The assignment also involved using headers and footers to structure the webpage in an organized manner.",
 "Artifact 3: In this project, we used JavaScript to generate patterns using symbols. We also created an interactive experience where users could input data to modify these patterns, implementing dropdown menus, buttons, and functions to create dynamic shapes. ",
 "Artifact 4: This assignment involved creating and validating typical sign-up form fields, such as making sure phone numbers contained only digits. We focused on validating input to provide the correct information to the site.",
 "Artifact 5: Using JavaScript, we created an automatic slideshow (carousel) to display images. This project taught us how to use timers to automatically change images, along with building a countdown feature for transitions."
];

var index=0; 
var time= 4;
var timer;

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1) {
  index=0;
 }
 else{
  index++;
 }
 updateImage();
 resetTime()
} 
 

function back(){
 if (index===0){
  index=myImages.length-1;
 }
 else {
  index--;
 }
 updateImage();
 resetTime()
} 

function autoSlide() {
  if (document.getElementById("auto").checked) {
    next();
  }
}

function timerStart(){
  timer = setInterval(function() {
  
    document.getElementById("timer").textContent = "00:" + (time < 10 ? "0" + time : time);
    time--;
    
    if (time < 0) {
      time = 4;  
      if (document.getElementById("auto").checked) {
        next();  
      }
    }
  }, 1000);  
}

function resetTime() {
 clearInterval(timer)
 time = 4;
 timerStart()
}

document.getElementById("auto").addEventListener("change", function () {
  if (this.checked) {
    timerStart();
  } else {
    clearInterval(timer);
    time = 4;
    document.getElementById("timer").textContent = "00:04";
  }
}, false);

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


timerStart();
