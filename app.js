"use strict";

const showLearnMore = document.querySelector(".learn-more-button");
const showSubscribe = document.querySelector(".subscribe-button");
const expirience = document.querySelector(".expirience");
const subscribe = document.querySelector(".subscribe");
const overlay = document.querySelector(".overlay");
const closeBtns = document.querySelectorAll(".close-btn");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const projectBtn = document.querySelector(".btn-header-projects");

showLearnMore.addEventListener("click", function () {
  console.log("learn more");
  expirience.classList.remove("hidden");
  title.style.opacity = "0.2";
  subtitle.style.opacity = "0.2";
});
showSubscribe.addEventListener("click", function () {
  subscribe.classList.remove("hidden");
  title.style.opacity = "0.2";
  subtitle.style.opacity = "0.2";
});

for (let i = 0; i < closeBtns.length; i++)
  closeBtns[i].addEventListener("click", function () {
    expirience.classList.add("hidden");
    title.style.opacity = "1";
    subtitle.style.opacity = "1";
    subscribe.classList.add("hidden");
  });
projectBtn.addEventListener("click", function () {
  console.log("projects");
});
