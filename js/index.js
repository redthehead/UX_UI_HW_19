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
  $(".resumeButton").css("background-color", "#F28705").css("color","black");
});
$(".resumeButton").mouseout(function() {
  $(".resumeButton").css("background-color", "#f1c84a").css("color","black");
});

$(".emailButton").hover(function() {
  $(".emailButton").css("background-color", "#F28705").css("color","black"); 
});
$(".emailButton").mouseout(function() {
  $(".emailButton").css("background-color", "#f1c84a").css("color","black");
});

$(".gitButton").mouseover(function() {
  $(".gitButton").css("background-color", "#F28705")
});
$(".gitButton").mouseout(function() {
  $(".gitButton").css("background-color", "#f1c84a")
});

$(".linkedButton").mouseover(function() {
  $(".linkedButton").css("background-color", "#F28705");
});
$(".linkedButton").mouseout(function() {
  $(".linkedButton").css("background-color", "#f1c84a")
});

$(".resumeIcon").mouseover(function() {
  $(".resumeIcon").css("background-color", "#F28705");
});
$(".resumeIcon").mouseout(function() {
  $(".resumeIcon").css("background-color", "#f1c84a")
});

$(".emailIcon").mouseover(function() {
  $(".emailIcon").css("background-color", "#F28705");
});
$(".emailIcon").mouseout(function() {
  $(".emailIcon").css("background-color", "#f1c84a")
});

$(".gitIcon").mouseover(function() {
  $(".gitIcon").css("background-color", "#F28705");
});
$(".gitIcon").mouseout(function() {
  $(".gitIcon").css("background-color", "#f1c84a")
});

$(".linkedIcon").mouseover(function() {
  $(".linkedIcon").css("background-color", "#F28705");
});
$(".linkedIcon").mouseout(function() {
  $(".linkedIcon").css("background-color", "#f1c84a")
});

$(".homeItemFoot").hover(function() {
  $(".homeItemFoot").css("color", "#731702")
});
$(".aboutItemFoot").hover(function() {
  $(".aboutItemFoot").css("color", "#731702")
});
$(".caseItemFoot").hover(function() {
  $(".caseItemFoot").css("color", "#731702")
});
