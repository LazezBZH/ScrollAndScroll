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
// window.onscroll = function () {
//   init();
//   scrollEssai();
//   scrollTransfo();
// };

// window.onscroll = function () {
//   init();
//   scrollEssai();
//   scrollTransfo();
// };

window.addEventListener("scroll", init);
window.addEventListener("load", welcomeback);
function welcomeback() {
  let nom = sessionStorage.getItem("nom scroll");
  if (sessionStorage.getItem("nom scroll")) {
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
      sessionStorage.removeItem("nom scroll");
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
  let go = window.scrollY / screen.height;
  if (go > 0.2 && go < 0.4) {
    body.classList.remove("stop-scrolling");
    title.style.display = "none";
    subTitle.style.display = "block";
  } else if (go > 0.4 && go < 0.6) {
    body.classList.remove("stop-scrolling");
    title.style.display = "none";
    subTitle.style.display = "none";

    // terrain.style.display = "block";
    // score.style.display = "block";
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
  sessionStorage.setItem("nom scroll", nom);
  // return nom;
}

function hideIntro() {
  intro.style.display = "none";
  // appear.forEach((item, i) => {
  //   setTimeout(() => {
  //     item.style.display = "inherit";
  //   }, i * 1200);
  // });
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

// function scrollEssai() {
//   let go = window.scrollY / screen.height;
//   if (go > 1 && go < 2.9) {
//     essai.style.bottom = 10 + (90 * (go - 1)) / 2 + "%";
//     essai.style.left = 10 + (50 * (go - 1)) / 2 + "%";
//     essai.style.transform = "rotate(-90deg)";
//     essai.style.display = "flex";
//     run.style.display = "none";
//     transfo.style.display = "none";
//     ball2.style.display = "none";
//     ball.style.display = "none";
//     black.style.display = "flex";
//     score.innerHTML = `A:0/B:0`;

//     black.animate(
//       [{ transform: "rotate(-40deg)" }, { transform: "rotate(-50deg)" }],
//       {
//         duration: 200,
//         iterations: Infinity,
//       }
//     );
//   } else if (go > 2.9 && go < 3.5) {
//     essai.style.transform = "rotate(45deg)";
//     essai.style.display = "flex";
//     run.style.display = "none";
//     transfo.style.display = "none";
//     ball2.style.display = "none";
//     ball.style.display = "none";
//     black.style.display = "flex";
//     score.innerHTML = `A:5/B:0`;
//     black.innerHTML = `<img  src="/img/lightred.svg" alt="scroll">`;
//     black.animate([{ transform: "rotate(-45deg)" }], {
//       duration: 200,
//       iterations: Infinity,
//     });
//   } else if (go > 3.5) essai.style.display = "none";
// }
// function scrollTransfo() {
//   let go = window.scrollY / screen.height;
//   console.log(go);
//   if (go > 3.5 && go < 7) {
//     black.innerHTML = `<img  src="/img/black.svg" alt="scroll">`;
//     run.style.bottom = 10 + (15 * (go - 3.5)) / 2 + "%";
//     run.style.left = 40 + (5 * (go - 3.5)) / 2 + "%";
//     run.style.transform = "rotate(-90deg)";
//     run.style.display = "flex";
//     ball2.style.display = "flex";

//     essai.style.display = "none";

//     transfo.style.display = "none";

//     ball.style.display = "none";
//     black.style.display = "flex";

//     score.innerHTML = `A:5/B:0`;

//     black.animate(
//       [{ transform: "rotate(-40deg)" }, { transform: "rotate(-50deg)" }],
//       {
//         duration: 200,
//         iterations: Infinity,
//       }
//     );
//   } else if (go > 7 && go < 7.1) {
//     run.style.display = "none";
//     transfo.style.display = "flex";

//     essai.style.display = "flex";

//     ball2.style.display = "flex";
//     ball.style.display = "none";
//     black.style.display = "flex";

//     transfo.style.bottom = 10 + (15 * (7 - 2.5)) / 2 + "%";
//     transfo.style.left = 40 + (5 * (7 - 2.5)) / 2 + "%";
//   } else if (go > 7.1 && go < 7.5) {
//     ball2.style.display = "none";
//     ball.style.display = "flex";

//     essai.style.display = "none";
//     run.style.display = "none";
//     transfo.style.display = "flex";

//     black.style.display = "flex";
//     myReq = moveImageAlongPath();
//   } else if (go > 7.5) {
//     score.innerHTML = `A:7/B:0`;
//     black.innerHTML = `<img  src="/img/red.svg" alt="scroll">`;
//     ball.style.display = "none";

//     essai.style.display = "none";
//     run.style.display = "none";
//     transfo.style.display = "flex";
//     ball2.style.display = "none";

//     black.style.display = "flex";

//     black.animate(
//       [{ transform: "rotate(-30deg)" }, { transform: "rotate(-70deg)" }],
//       {
//         duration: 200,
//         iterations: Infinity,
//       }
//     );
//     setInterval(erase, 1000);
//     function erase() {
//       black.style.display = "none";
//       essai.style.display = "none";
//       run.style.display = "none";
//       transfo.style.display = "flex";
//       ball2.style.display = "none";
//       ball.style.display = "none";
//     }
//   }
// }

// let flower1 = document.getElementById("flower-1");
// let flower2 = document.getElementById("flower-2");
// let flower3 = document.getElementById("flower-3");
// let flower4 = document.getElementById("flower-4");
// let flower5 = document.getElementById("flower-5");
// let butterfly = document.getElementById("butterfly");
// let bee = document.getElementById("bee");
// let mouse = document.getElementById("mouse");
// let zzz = document.getElementById("zzz");
// let header = document.querySelector("header");

// window.addEventListener("scroll", (event) => {
//   if (window.scrollY > (body.clientHeight - screen.height) / 10) {
//     flower1.style.display = "flex";
//   }
// });
// window.addEventListener("scroll", (event) => {
//   if (window.scrollY > (body.clientHeight - screen.height) / 3) {
//     flower2.style.display = "flex";
//   }
// });
// window.addEventListener("scroll", (event) => {
//   if (window.scrollY > (body.clientHeight - screen.height) / 2) {
//     flower3.style.display = "flex";
//   }
// });
// window.addEventListener("scroll", (event) => {
//   if (window.scrollY > (body.clientHeight - screen.height) / 1.8) {
//     flower4.style.display = "flex";
//   }
// });
// window.addEventListener("scroll", (event) => {
//   if (window.scrollY > (body.clientHeight - screen.height) / 1.3) {
//     flower5.style.display = "flex";
//     butterfly.classList.add("butterfly-fly");
//     bee.classList.add("bee-fly");
//     setTimeout(() => {
//       mouse.style.display = "flex";
//     }, 6010);
//     setTimeout(() => {
//       flower1.style.display = "none";

//       flower5.style.display = "none";
//     }, 6510);
//     setTimeout(() => {
//       flower3.style.display = "none";
//     }, 7010);
//     setTimeout(() => {
//       flower2.style.display = "none";

//       flower4.style.display = "none";
//     }, 7510);
//     setTimeout(() => {
//       body.style.backgroundColor = "black";
//       zzz.style.display = "flex";
//       header.style.display = "none";
//     }, 8500);
//     setTimeout(() => {
//       window.location.replace("/end.html");
//     }, 9500);
//   }
// });

// ballon
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const centerX = canvas.width / 1;
// const centerY = canvas.height / 2;
// const radiusX = 550;
// const radiusY = 330;

// let angle = 0;

// function drawRugbyBall() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   const x = centerX + radiusX * Math.cos(angle);
//   const y = centerY + radiusY * Math.sin(angle);

//   ctx.beginPath();
//   ctx.ellipse(x, y, 30, 17, 0, 0, Math.PI * 2);
//   ctx.lineWidth = 3;
//   ctx.strokeStyle = "cyan";
//   ctx.stroke();
//   ctx.closePath();

//   angle += 0.02;

//   requestAnimationFrame(drawRugbyBall);
// }

// drawRugbyBall();
// const image = document.getElementById("ball");
// const radiusX = 100; // Rayon horizontal de l'ellipse
// const radiusY = 50; // Rayon vertical de l'ellipse
// let angle = 0;

// function moveImageAlongEllipse() {
//   const x = radiusX * Math.cos(angle);
//   const y = radiusY * Math.sin(angle);

//   // Positionnez l'image aux coordonnées (x, y) par rapport au conteneur
//   image.style.left = x + "px";
//   image.style.top = y + "px";

//   angle += 0.02; // Augmente l'angle pour l'animation

//   requestAnimationFrame(moveImageAlongEllipse);
// }

// moveImageAlongEllipse();

// let x = 42;
// let y = 42;
// let ascending = true;

// function moveImageAlongPath() {
//   // Mettez à jour la position de l'image
//   ball.style.left = x + "%";
//   ball.style.bottom = y + "%";

//   // Mettez à jour les coordonnées en fonction du mouvement souhaité
//   if (ascending) {
//     x -= 1; //left
//     y += 1.3; //bottom
//     if (x === 0 && y > 90) {
//       ascending = false;
//     }
//   } else {
//     x += 1.8;
//     y += 0.5;
//     // if (x === 10 && y === 0) {
//     //   ascending = true;
//     // }
//   }

//   myReq = requestAnimationFrame(moveImageAlongPath);
//   if (y > 120) {
//     cancelAnimationFrame(myReq);
//   }
// }

// // myReq = moveImageAlongPath();
