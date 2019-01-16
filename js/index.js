//
var rockClimber = document.getElementById("rc");
var processImprover = document.getElementById("pr");
var mentor = document.getElementById("mn");
var webDesigner = document.getElementById("wds");
var webDeveloper = document.getElementById("webDeveloper");
var artisan = document.getElementById("ar");
var futurist = document.getElementById("ft");
var accountant = document.getElementById("ac");
var analyst = document.getElementById("an");
var perfectionist = document.getElementById("prf");

var princ2 = "<clean code />";

//scrollspy. Navigation bar tabs changes in accordance with the current view point

function Utils() {
}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height() + 5;
      
        if ((pageBottom > elementTop) && (pageBottom < elementBottom)) {
          document.getElementsByClassName(element[0].id + "-underline")[0].style.color = "rgb(92, 92, 61)";
        } else {
          document.getElementsByClassName(element[0].id + "-underline")[0].style.color = "white";
        }

    }
};

var Utils = new Utils();

var animationDisplayed = false;

function whoIam() {
  if (($("#webDeveloper").offset().top < ($(window).scrollTop() + $(window).height())) && !animationDisplayed) {
    animationDisplayed = true;  

    setTimeout(function(){ 
      rockClimber.style.visibility = "visible"; 
      rockClimber.style.opacity = "0.5";
      rockClimber.style.paddingRight = "17%";
      perfectionist.style.visibility = "visible";
      perfectionist.style.opacity = "0.5";
    }, 1000);
    
    setTimeout(function(){ 
      processImprover.style.visibility = "visible"; 
      processImprover.style.opacity = "0.75";
      accountant.style.visibility = "visible";
      accountant.style.opacity = "0.85";
      accountant.style.paddingLeft = "40%";
      analyst.style.visibility = "visible";
      analyst.style.opacity = "0.75";
      analyst.style.paddingLeft = "55%";
    }, 500);
    
    setTimeout(function(){ 
      mentor.style.visibility = "visible"; 
      mentor.style.opacity = "1";
      mentor.style.paddingLeft = "40%";
      futurist.style.visibility = "visible";
      futurist.style.opacity = "0.85";
      futurist.style.paddingRigt = "15%";
    }, 200);
    
    setTimeout(function(){ 
      webDesigner.style.visibility = "visible"; 
      webDesigner.style.opacity = "1";
      webDesigner.style.paddingRight = "20%";
      artisan.style.visibility = "visible"; 
      artisan.style.opacity = "1";
      artisan.style.paddingRight = "25%";
    }, 100);
    
      }
}


$( window ).scroll(function() {
 Utils.isElementInView($('#portfolio'), false);
 Utils.isElementInView($('#about-me'), false);
  whoIam();
});

//type "<clean code />":

window.onload = typing(0);

function typing(curr) {
  document.getElementById("princ2text").innerHTML += princ2[curr];
  curr++;
  if (curr < princ2.length) {
   setTimeout(function () {typing(curr); }, 50); 
  }
}


(function getContent() {
  const Http = new XMLHttpRequest();
  const url = "https://corp-grow.herokuapp.com/";
  Http.open("GET", url);
  Http.send();
})();
