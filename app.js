"use strict";

const showLearnMore = document.querySelector(".learn-more-button");
const paragraphLM = document.querySelector(".test");

showLearnMore.addEventListener("click", function () {
  paragraphLM.classList.remove("hidden");
});
