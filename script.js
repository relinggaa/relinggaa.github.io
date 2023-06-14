const darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", () => {
  lightmode.classList.remove("active");
  darkmode.classList.add("active");
  const navbar = document.getElementsByTagName("nav")[0];
  navbar.classList.add("darknav");
  const home = document.getElementsByTagName("section")[0];
  home.style.backgroundColor = "#0f0f0f";
  const buttonhome = document.getElementById("buttonhome");
  buttonhome.style.backgroundColor = "#ffff";
  buttonhome.style.color = "#0f0f0f";
  const gambarhome = document.getElementById("gambarhome");
  gambarhome.src = "assets/img/imgdark.png";
});

const lightmode = document.getElementById("lightmode");
lightmode.addEventListener("click", () => {
  darkmode.classList.remove("active");
  lightmode.classList.add("active");
  const navbar = document.getElementsByTagName("nav")[0];
  navbar.classList.remove("darknav");
  home.style.backgroundColor = "#007aff";
  buttonhome.style.backgroundColor = "#e68900";
  buttonhome.style.color = "#ffff";
  const gambarhome = document.getElementById("gambarhome");
  gambarhome.src = "assets/img/lompat2.png";
});
