let openWindow = document.getElementById("popupWindow__test");
let buttonTest = document.getElementById("main__buttom__test");
let closeWindow = document.querySelector(".popupWindow__close");
let openWindow1 = document.getElementById("popupWindow__test2");
let buttonTest2 = document.getElementById("next__button1__test");
let openWindow2 = document.getElementById("popupWindow__test3");
let buttonTest3 = document.getElementById("next__button2__test");

buttonTest.addEventListener("click", function () {
  openWindow.classList.remove("hiden");
  openWindow.classList.add("visible");
});

closeWindow.addEventListener("click", function () {
  openWindow.classList.remove("visible");
  openWindow.classList.add("hiden");
});

buttonTest2.addEventListener("click", function () {
  openWindow.classList.replace("visible", "hiden");
  openWindow1.classList.remove("hiden");
  openWindow1.classList.add("visible");
});

closeWindow.addEventListener("click", function () {
  openWindow1.classList.remove("visible");
  openWindow1.classList.add("hiden");
});

buttonTest3.addEventListener("click", function () {
  openWindow1.classList.replace("visible", "hiden");
  openWindow2.classList.remove("hiden");
  openWindow2.classList.add("visible");
});

closeWindow.addEventListener("click", function () {
  openWindow2.classList.remove("visible");
  openWindow2.classList.add("hiden");
});
