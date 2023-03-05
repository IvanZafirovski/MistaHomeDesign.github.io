"use strict";

const showLearnMore = document.querySelector(".learn-more-button");
const expirience = document.querySelector(".expirience");
const overlay = document.querySelector(".overlay");
const closeLM = document.querySelector(".close-learn-more");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

showLearnMore.addEventListener("click", function () {
  console.log("learn more");
  expirience.classList.remove("hidden");
  title.

});

closeLM.addEventListener("click", function () {
  expirience.classList.add("hidden");
  
});
