"use strict";
document.addEventListener("DOMContentLoaded", function() {
  //page scrolling
  var headerHeight = document.querySelector("header").getBoundingClientRect()
    .height;
  function currentPosition() {
    return window.pageYOffset;
  }
  function futurePosition(elId) {
    var el = document.getElementById(elId);
    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }
    var elY = getCoords(el).top;
    // console.log(el.offsetTop);
    return elY;
  }
  function scrollTo(elY) {
    console.log(elY);
    // window.scrollTo(0, (elY - headerHeight));
    if (elY > currentPosition()) {
      var i = 1;
      var myInterval = setInterval(function() {
        window.scrollTo(0, i * (elY - headerHeight) / 50);
        i++;
        if (i == 51) {
          clearInterval(myInterval);
        }
      }, 10);
    } else {
      var j = 51;
      var initialPositionTick = (currentPosition() - elY + headerHeight) / 50;
      var myInterval = setInterval(function() {
        window.scrollBy(0, -initialPositionTick);
        j--;
        if (j == 1) {
          clearInterval(myInterval);
        }
      }, 10);
    }
  }
  var links = document.querySelectorAll(".header__menu a");
  console.log(links);
  for (var i = 0; i < links.length; i++) {
    typeof links[i];
    links[i].addEventListener("click", function(e) {
      e.preventDefault();
      var elId = this.getAttribute("data-goto");
      scrollTo(futurePosition(elId));
    });
  }
});
