const navList = document.querySelector(".navList");
const burger = document.querySelector(".burger");
const overlay = document.querySelector("#overlay");
const cross = document.getElementById("cross");
const burgerBar = document.querySelector(".bar");

cross.addEventListener("click", () => {
  navList.setAttribute("data-visible", "false");
  overlay.classList.remove("active");
  document.body.classList.remove("positionFixed");
});

document.getElementById("cross").addEventListener("click", function () {
  document.querySelector(".navList").classList.remove("active");
});

burger.addEventListener("click", () => {
  const visibility = navList.getAttribute("data-visible");

  if (visibility === "false") {
    navList.setAttribute("data-visible", true);
    burger.setAttribute("aria-expanded", true);
    overlay.classList.toggle("active");
    document.body.classList.add("positionFixed");
  } else if (visibility === "true") {
    navList.setAttribute("data-visible", false);
    burger.setAttribute("aria-expanded", false);
    overlay.classList.remove("active");
    document.body.classList.remove("positionFixed");
  }
});
