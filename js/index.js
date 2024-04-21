console.log("Your index.js file is loaded correctly");

//Hamburger Menu
const hamNavBar = document.querySelector(".hamNavBar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (hamNavBar.classList.contains("showMenu")) {
    hamNavBar.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    hamNavBar.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


//Hover states

$(".resumeButton").mouseover(function() {
  $(".resumeButton").css("background-color", "#032E3F").css("color","white");
});
$(".resumeButton").mouseout(function() {
  $(".resumeButton").css("background-color", "#f1c84a").css("color","black");
});

$(".emailButton").hover(function() {
  $(".emailButton").css("background-color", "#032E3F").css("color","white"); 
});
$(".emailButton").mouseout(function() {
  $(".emailButton").css("background-color", "#f1c84a").css("color","black");
});

$(".gitButton").mouseover(function() {
  $(".gitButton").css("background-color", "#032E3F").css("color","white"); 
});
$(".gitButton").mouseout(function() {
  $(".gitButton").css("background-color", "#f1c84a").css("color","black");
});

$(".linkedButton").mouseover(function() {
  $(".linkedButton").css("background-color", "#032E3F");
});
$(".linkedButton").mouseout(function() {
  $(".linkedButton").css("background-color", "#f1c84a").css("color","black");
});
