const darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", () => {
  //darkmode
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
  const gambarmobile = document.getElementById("gambarhomemobile");
  gambarmobile.src = "assets/img/imgdark.png";
  // about
  const gelembung = document.getElementsByTagName("path")[0];
  gelembung.removeAttribute("fill");
  gelembung.setAttribute("fill", "#212529");
  const about = document.getElementById("about");
  about.style.backgroundColor = "#212529";
  about.style.color = "#ffff";
  // my project
  const gelembung2 = document.getElementsByTagName("path")[1];
  gelembung2.removeAttribute("fill");
  gelembung2.setAttribute("fill", "#0f0f0f");
  const myproject = document.getElementById("project");
  myproject.style.backgroundColor = "#0f0f0f";
  const h1project = document.querySelector("#project h1");
  h1project.style.color = "#ffff";
  const buttonproject = document.querySelectorAll("#project a");
  buttonproject.forEach((tombol) => {
    tombol.classList.replace("buttonproject", "buttonprojectdark");
  });
  //contact
  const gelembung3 = document.getElementsByTagName("path")[2];
  gelembung3.removeAttribute("fill");
  gelembung3.setAttribute("fill", "#212529");
  const contact = document.getElementById("contact");
  contact.style.backgroundColor = "#212529";
  contact.style.color = "#ffff";
  const buttoncontact = document.getElementById("buttoncontact");
  buttoncontact.classList.replace("buttonlight", "buttondark");
  //footer
  const gelembung4 = document.getElementsByTagName("path")[3];
  gelembung4.setAttribute("fill", "#0f0f0f");
  const footer = document.getElementsByTagName("footer")[0];
  footer.style.backgroundColor = "#0f0f0f";
});
// lightmode
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
  const gambarmobile = document.getElementById("gambarhomemobile");
  gambarmobile.src = "assets/img/lompat2.png";
  //   about
  const gelembung = document.getElementsByTagName("path")[0];
  gelembung.removeAttribute("fill");
  gelembung.setAttribute("fill", "#f5faff");
  about.style.backgroundColor = "#f5faff";
  about.style.color = "#29384e";

  //   project
  const gelembung2 = document.getElementsByTagName("path")[1];
  gelembung2.removeAttribute("fill");
  gelembung2.setAttribute("fill", "#ffff");
  const myproject = document.getElementById("project");
  myproject.style.backgroundColor = "#ffff";
  const h1project = document.querySelector("#project h1");
  h1project.style.color = "#29384e;";
  // contact
  const gelembung3 = document.getElementsByTagName("path")[2];
  gelembung3.removeAttribute("fill");
  gelembung3.setAttribute("fill", "#f5faff");
  const contact = document.getElementById("contact");
  contact.style.backgroundColor = "#f5faff";
  contact.style.color = "#29384e";
  const buttonproject = document.querySelectorAll("#project a");
  buttonproject.forEach((tombol) => {
    tombol.classList.replace("buttonprojectdark", "buttonproject");
  });
  const footer = document.getElementsByTagName("footer")[0];
  footer.style.backgroundColor = "#007aff";
});
