const body = document.querySelector("body");

const title = document.querySelector("h1");
const subTitle = document.querySelector(".end-header");
const wrapper = document.querySelector(".wrapper");
const terrain = document.querySelector(".terrain");
const intro = document.querySelector(".intro");

const essai = document.querySelector("#essai");
const black = document.querySelector("#black");
const blackInit = document.querySelector("#blackInit");
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

let nom = localStorage.getItem("nom scroll");

window.addEventListener("scroll", scrollEssai);
window.addEventListener("scroll", scrollTransfo);
function scrollEssai() {
  let go = window.scrollY / screen.height;

  if (go < 0.5) {
    score.innerHTML = `  LET'S PLAY!`;
    wrapper.style.display = "flex";
    terrain.style.display = "none";
    essai.style.display = "none";
    run.style.display = "none";
    transfo.style.display = "none";
    blackInit.style.display = "flex";
    black.style.display = "none";
    ball2.style.display = "none";
    ball.style.display = "none";
    black.innerHTML = `<img alt="tout noir" src="/img/black.svg" alt="scroll">`;
  } else if (go >= 0.5 && go < 1) {
    //apparition du joueur
    score.innerHTML = `  <div class="scoreDiv">${nom} : 0 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "flex";
    run.style.display = "none";
    transfo.style.display = "none";
    blackInit.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";
    black.innerHTML = `<img alt="tout noir" src="/img/black.svg" alt="scroll">`;
  } else if (go >= 0 && go < 2) {
    // apparition de tout noir
    score.innerHTML = `  <div class="scoreDiv">${nom} : 0 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "flex";
    run.style.display = "none";
    transfo.style.display = "none";
    blackInit.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";
    black.innerHTML = `<img alt="tout noir" src="/img/black.svg" alt="scroll">`;

    //tout noir s'excite
    black.animate(
      [{ transform: "rotate(-40deg)" }, { transform: "rotate(-50deg)" }],
      {
        duration: 200,
        iterations: Infinity,
      }
    );
  } else if (go >= 2 && go < 3.9) {
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "flex";
    run.style.display = "none";
    transfo.style.display = "none";
    blackInit.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";

    // le joueur court
    essai.style.bottom = 10 + (110 * (go - 2)) / 2 + "%";
    essai.style.left = 10 + (70 * (go - 2)) / 2 + "%";
    essai.style.transform = "rotate(-50deg)";

    score.innerHTML = `  <div class="scoreDiv">${nom} : 0 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
  } else if (go >= 2 && go < 3.9) {
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "flex";
    run.style.display = "none";
    transfo.style.display = "none";
    blackInit.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";

    // le joueur court
    essai.style.bottom = 10 + (90 * (go - 2)) / 2 + "%";
    essai.style.left = 10 + (50 * (go - 2)) / 2 + "%";
    essai.style.transform = "rotate(-50deg)";

    score.innerHTML = `  <div class="scoreDiv">${nom} : 0 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
  } else if (go >= 4.5 && go < 6.5) {
    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "flex";
    run.style.display = "nones";
    transfo.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";

    score.innerHTML = `  <div class="scoreDiv">${nom} : 5 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    black.innerHTML = `<img alt="tout orange" src="/img/lightred.svg" alt="scroll">`;
    black.animate([{ transform: "rotate(-45deg)" }], {
      duration: 200,
      iterations: Infinity,
    });
    essai.style.transform = "rotate(20deg)";
  }
}
function scrollTransfo() {
  let go = window.scrollY / screen.height;
  console.log("go", go);
  if (go >= 6.5 && go < 8) {
    black.innerHTML = `<img alt="tout noir" src="/img/black.svg" alt="scroll">`;
    run.style.bottom = 10 + (15 * (go - 4.5)) / 2 + "%";
    run.style.left = 40 + (5 * (go - 4.5)) / 2 + "%";
    run.style.transform = "rotate(-90deg)";

    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "none";
    run.style.display = "flex";
    transfo.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "flex";
    ball.style.display = "none";

    score.innerHTML = `  <div class="scoreDiv">${nom} : 5 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;

    black.animate(
      [{ transform: "rotate(-40deg)" }, { transform: "rotate(-50deg)" }],
      {
        duration: 200,
        iterations: Infinity,
      }
    );
  } else if (go >= 8 && go < 8.5) {
    score.innerHTML = `  <div class="scoreDiv">${nom} : 5 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "none";
    run.style.display = "flex";
    transfo.style.display = "none";
    black.style.display = "flex";
    ball2.style.display = "flex";
    ball.style.display = "none";

    transfo.style.bottom = 10 + (15 * (go - 3.5)) / 2 + "%";
    transfo.style.left = 40 + (5 * (go - 3.5)) / 2 + "%";
  } else if (go >= 8.5 && go < 9.5) {
    score.innerHTML = `  <div class="scoreDiv">${nom} : 5 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "none";
    run.style.display = "none";
    transfo.style.display = "flex";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "flex";

    myReq = moveImageAlongPath();
  } else if (go >= 9.5 && go < 11) {
    score.innerHTML = `  <div class="scoreDiv">${nom} : 7 </div><span id="score"></span> <div class="scoreDiv">Tout Noir: 0</div>`;
    black.innerHTML = `<img alt="tout rouge" src="/img/red.svg" alt="scroll">`;

    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "none";
    run.style.display = "none";
    transfo.style.display = "flex";
    black.style.display = "flex";
    ball2.style.display = "none";
    ball.style.display = "none";

    black.animate(
      [{ transform: "rotate(-30deg)" }, { transform: "rotate(-70deg)" }],
      {
        duration: 200,
        iterations: Infinity,
      }
    );
  } else if (go >= 11 && go < 11.5) {
    score.innerHTML = `  BRAVO! <span class="nom"> ${nom}</span>`;
    score.style.top = "10vh";
    score.style.border = "red solid 10px";
    score.style.color = "white";
    blackInit.style.display = "none";
    wrapper.style.display = "flex";
    terrain.style.display = "block";
    essai.style.display = "none";
    run.style.display = "none";
    transfo.style.display = "flex";
    black.style.display = "none";
    ball2.style.display = "none";
    ball.style.display = "none";
  } else if (go >= 11.5 && go < 12) {
    blackInit.style.display = "none";
    wrapper.style.display = "none";
    terrain.style.display = "none";
    essai.style.display = "none";
    run.style.display = "none";
    transfo.style.display = "none";
    black.style.display = "none";
    ball2.style.display = "none";
    ball.style.display = "none";
  } else if (go >= 12) {
    window.location.replace("/");
  }
}

// ballon transformation
let x = 42;
let y = 42;
let ascending = true;

function moveImageAlongPath() {
  ball.style.left = x + "%";
  ball.style.bottom = y + "%";

  if (ascending) {
    x -= 1; //left
    y += 1.3; //bottom
    if (x === 0 && y > 90) {
      ascending = false;
    }
  } else {
    x += 1.8;
    y += 0.5;
  }

  myReq = requestAnimationFrame(moveImageAlongPath);
  if (y > 120) {
    cancelAnimationFrame(myReq);
  }
}
