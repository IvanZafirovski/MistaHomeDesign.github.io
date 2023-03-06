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

const learnMore = function () {
  expirience.classList.remove("hidden");
  overlay.classList.remove("hidden");
  title.style.opacity = "0.2";
  subtitle.style.opacity = "0.2";
};
const subscribeTeam = function () {
  subscribe.classList.remove("hidden");
  overlay.classList.remove("hidden");
  title.style.opacity = "0.2";
  subtitle.style.opacity = "0.2";
};
const overlayAll = function () {
  overlay.classList.add("hidden");
  expirience.classList.add("hidden");
  subscribe.classList.add("hidden");
  title.style.opacity = "1";
  subtitle.style.opacity = "1";
};

for (let i = 0; i < closeBtns.length; i++)
  closeBtns[i].addEventListener("click", function () {
    expirience.classList.add("hidden");
    subscribe.classList.add("hidden");
    title.style.opacity = "1";
    subtitle.style.opacity = "1";
  });
overlay.addEventListener("click", overlayAll);
showLearnMore.addEventListener("click", learnMore);
showSubscribe.addEventListener("click", subscribeTeam);

projectBtn.addEventListener("click", function () {
  console.log("projects");
});
