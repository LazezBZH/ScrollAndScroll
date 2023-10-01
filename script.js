const body = document.querySelector("body");

const title = document.querySelector("h1");
const subTitle = document.querySelector(".end-header");
const wrapper = document.querySelector(".wrapper");
const terrain = document.querySelector(".terrain");
const intro = document.querySelector(".intro");
const back = document.querySelector(".back");

const essai = document.querySelector("#essai");
const black = document.querySelector("#black");
const blackSVG = document.querySelector(".black");
const run = document.querySelector("#run");
const transfo = document.querySelector("#transfo");
const ball2 = document.querySelector("#ball2");
const ball = document.querySelector("#ball");
const score = document.querySelector(".score");
// console.log("largueur", screen.width);
// console.log("hauteur écran", screen.height);
// console.log("hauteur body", body.clientHeight);
// console.log("window.scrollY", window.scrollY);
// console.log("scrollY MAX", body.clientHeight - screen.height);

window.addEventListener("scroll", init);
window.addEventListener("load", welcomeback);
function welcomeback() {
  let nom = localStorage.getItem("nom scroll");
  if (localStorage.getItem("nom scroll")) {
    console.log("back");
    back.style.display = "block";
    body.classList.add("stop-scrolling");
    back.innerHTML = `<section><p>Oh ${nom}! C'est encore toi?<p>
    <div><button class="no">Non je ne suis pas ${nom}.</button></div>
    <div><button class="yes">Oui je suis ${nom} et je veux jouer à nouveau.</button></div></section>`;
    const no = document.querySelector(".no");
    const yes = document.querySelector(".yes");
    no.addEventListener("click", start);
    yes.addEventListener("click", restart);

    function start() {
      localStorage.removeItem("nom scroll");
      body.classList.remove("stop-scrolling");
      back.style.display = "none";
      init();
    }
    function restart() {
      back.style.display = "none";
      window.location.replace("/match.html");
      init();
    }
  }
}

function init() {
  title.style.display = "block";
  let go = window.scrollY / screen.height;
  if (go > 0.2 && go < 0.4) {
    body.classList.remove("stop-scrolling");
    title.style.display = "none";
    subTitle.style.display = "block";
  } else if (go > 0.4 && go < 0.6) {
    body.classList.remove("stop-scrolling");
    title.style.display = "none";
    subTitle.style.display = "none";
  } else if (go > 0.6) {
    disableScroll();
    setInterval(showIntro, 1000);
  }
}

const appear = document.querySelectorAll(".appear");
const send = document.querySelector(".send");
const input = document.querySelector("#name");

input.addEventListener("keyup", getName);
send.addEventListener("click", enableScroll);
let nom = "";
function getName(e) {
  nom = e.target.value;
  if (nom.length > 0) {
    send.disabled = false;
  }
  console.log(nom);
  localStorage.setItem("nom scroll", nom);
}

function hideIntro() {
  intro.style.display = "none";
}

function showIntro() {
  intro.style.display = "flex";
  appear.forEach((item, i) => {
    setTimeout(() => {
      item.style.display = "inherit";
    }, i * 1200);
  });
}

// disable scroll
function disableScroll() {
  body.classList.add("stop-scrolling");
}
function enableScroll() {
  body.classList.remove("stop-scrolling");
  window.location.replace("/match.html");
}
// disable scroll
