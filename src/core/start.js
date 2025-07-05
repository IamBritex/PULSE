// ===== Crear e insertar CSS =====
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap');

  #container {
    width: 1280px;
    height: 720px;
    position: relative;
    overflow: hidden;
    background: gray;
    font-family: Arial, sans-serif;
    color: white;
    user-select: none;
  }

  .img-full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }

  /* Texto PULSE inicial */
  .text-pulse {
    position: absolute;
    width: 402px;
    height: 116px;
    left: 439px;
    right: 439px;
    top: 165px;
    bottom: 439px;

    font-size: 64px;
    font-weight: bold;
    text-align: center;
    line-height: 116px;
    text-shadow: 2px 2px 5px black;

    z-index: 2;

    transition: all 1s ease;
    font-family: Arial, sans-serif;
    color: white;
  }

  /* Texto PULSE estilo mainMenu */
  .text-pulse.main-menu {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'DM Sans', sans-serif;
    font-size: 80px;
    font-weight: 700;
    line-height: 104px;
    letter-spacing: 0px;
    text-align: center;
    position: absolute;
    width: 402px;
    height: 116px;
    left: 0;
    right: 878px;
    top: 65px;
    bottom: 539px;
  }

  /* splash-text base (start) */
  .text-splash {
    position: absolute;
    width: 237px;
    height: 27px;
    left: 522px;
    right: 521px;
    top: 620px;
    bottom: 73px;

    color: rgba(255, 255, 255, 0.8);
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: center;

    z-index: 11;

    transition: all 1s ease;
  }

  /* splash-text mainMenu */
  .text-splash.main-menu {
    position: absolute;
    width: 237px;
    height: 27px;
    left: 83px;
    right: 960px;
    top: 154px;
    bottom: 539px;
  }

  /* navbar hidden (off-screen top) */
  .navbar {
    position: absolute;
    width: 1281px;
    height: 34px;
    left: 0;
    right: 0;
    top: -34px;
    backdrop-filter: blur(100px);
    background: rgba(77, 77, 77, 0.3);
    z-index: 10;

    transition: top 0.5s ease;
  }

  .navbar.visible {
    top: 0;
  }

  /* Rectangle 2 */
  .rectangle2 {
    position: absolute;
    width: 893.24px;
    height: 687.25px;
    left: -550px;
    top: 450px;
    transform: rotate(-45deg);
    backdrop-filter: blur(6px);
    background: rgba(42, 42, 42, 0.3);
    z-index: 5;
  }

  /* Rectangle 3 */
  .rectangle3 {
    position: absolute;
    width: 240.08px;
    height: 2px;
    left: -28.08px;
    top: 529.76px;
    bottom: 526.81px;
    transform: rotate(-45deg);
    background: radial-gradient(2881836% 50% at 50% 50%, rgb(255,255,255) 13.74%, rgba(255,255,255,0) 87.023%);
    z-index: 8;
  }

  /* Rectangle 4 */
  .rectangle4 {
    position: absolute;
    width: 309.93px;
    height: 2px;
    left: 2.9px;
    top: 645.42px;
    transform: rotate(-45deg);
    background: radial-gradient(4802729% 50% at 50% 50%, rgb(255,255,255) 13.74%, rgba(255,255,255,0) 87.023%);
    z-index: 6;
  }

  /* JU GAR text */
  .jugartxt {
    position: absolute;
    width: 216px;
    height: auto;
    left: -25px;
    top: 379px;
    bottom: auto;
    transform: rotate(-45deg) translate(-50px, 50px);
    opacity: 0;
    background: linear-gradient(270deg, rgba(255,255,255,0.8), rgba(255,255,255,0.32));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-family: 'DM Sans', sans-serif;
    font-size: 60px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;

    z-index: 12;
    white-space: pre-line;

    transition: all 0.7s ease;
    cursor: pointer;
  }

  .jugartxt.visible {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 1;
  }

  .jugartxt:hover {
    transform: rotate(-45deg) translate(10px, -10px);
  }

  /* MULTIPLAYER text */
  .multiplayertxt {
    position: absolute;
    width: 393.57px;
    height: 86px;
    left: -73px;
    right: 797.01px;
    top: 564.29px;
    bottom: auto;
    transform: rotate(-45deg) translate(-50px, 50px);
    opacity: 0;
    background: linear-gradient(270deg, rgba(255,255,255,0.8), rgba(255,255,255,0.32));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-family: 'DM Sans', sans-serif;
    font-size: 55px;
    font-weight: 500;
    line-height: 78px;
    letter-spacing: 0px;
    text-align: left;

    z-index: 12;
    white-space: nowrap;

    transition: all 0.7s ease;
    cursor: pointer;
  }

  .multiplayertxt.visible {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 1;
  }

  .multiplayertxt:hover {
    transform: rotate(-45deg) translate(10px, -10px);
  }

  /* EDITOR text */
  .editortxt {
    position: absolute;
    width: 211.92px;
    height: 86px;
    left: 117.56px;
    top: 609.85px;
    transform: rotate(-45deg) translate(-50px, 50px);
    opacity: 0;
    background: linear-gradient(270deg, rgba(255,255,255,0.8), rgba(255,255,255,0.32));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-family: 'DM Sans', sans-serif;
    font-size: 60px;
    font-weight: 500;
    line-height: 78px;
    letter-spacing: 0px;
    text-align: left;

    z-index: 12;
    white-space: nowrap;

    transition: all 0.7s ease;
    cursor: pointer;
  }

  .editortxt.visible {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 1;
  }

  .editortxt:hover {
    transform: rotate(-45deg) translate(10px, -10px);
  }
`;
document.head.appendChild(style);

const container = document.getElementById('container');

let textPulse, textSplash, img, navbar, rectangle2, rectangle3, rectangle4, jugarTxt, multiplayerTxt, editorTxt;

// Mostrar pantalla inicial
function showStartScreen() {
  container.innerHTML = '';

  img = document.createElement('img');
  img.src = '../../assets/menu/bgMainMenu.png';
  img.classList.add('img-full');
  container.appendChild(img);

  textPulse = document.createElement('div');
  textPulse.classList.add('text-pulse');
  textPulse.textContent = 'PULSE';
  container.appendChild(textPulse);

  textSplash = document.createElement('div');
  textSplash.classList.add('text-splash');
  textSplash.textContent = 'press any key for\ncontinue';
  container.appendChild(textSplash);
}

// Mostrar menú principal con transiciones y elementos nuevos
function showMainMenu() {
  if (textSplash) {
    textSplash.textContent = 'Your never see it coming';
    textSplash.classList.add('main-menu');
  }

  if (textPulse) {
    textPulse.classList.add('main-menu');
  }

  if (!navbar) {
    navbar = document.createElement('div');
    navbar.classList.add('navbar');
    container.appendChild(navbar);
    // Forzar reflow para aplicar estilos iniciales
    void navbar.offsetWidth;
    navbar.classList.add('visible');
  } else {
    navbar.classList.add('visible');
  }

  if (!rectangle2) {
    rectangle2 = document.createElement('div');
    rectangle2.classList.add('rectangle2');
    container.appendChild(rectangle2);
  }

  if (!rectangle3) {
    rectangle3 = document.createElement('div');
    rectangle3.classList.add('rectangle3');
    container.appendChild(rectangle3);
  }

  if (!rectangle4) {
    rectangle4 = document.createElement('div');
    rectangle4.classList.add('rectangle4');
    container.appendChild(rectangle4);
  }

  // CORRECCIÓN: Crear elementos con estado inicial, luego aplicar animación
  if (!jugarTxt) {
    jugarTxt = document.createElement('div');
    jugarTxt.classList.add('jugartxt');
    jugarTxt.textContent = 'PLAY';
    container.appendChild(jugarTxt);
    
    // Forzar reflow para aplicar estilos iniciales
    void jugarTxt.offsetWidth;
    
    // Aplicar animación después de un pequeño delay
    setTimeout(() => {
      jugarTxt.classList.add('visible');
    }, 100);
  }

  if (!multiplayerTxt) {
    multiplayerTxt = document.createElement('div');
    multiplayerTxt.classList.add('multiplayertxt');
    multiplayerTxt.textContent = 'MULTIPLAYER';
    container.appendChild(multiplayerTxt);
    
    // Forzar reflow para aplicar estilos iniciales
    void multiplayerTxt.offsetWidth;
    
    // Aplicar animación después de un pequeño delay
    setTimeout(() => {
      multiplayerTxt.classList.add('visible');
    }, 200);
  }

  if (!editorTxt) {
    editorTxt = document.createElement('div');
    editorTxt.classList.add('editortxt');
    editorTxt.textContent = 'EDITOR';
    container.appendChild(editorTxt);
    
    // Forzar reflow para aplicar estilos iniciales
    void editorTxt.offsetWidth;
    
    // Aplicar animación después de un pequeño delay
    setTimeout(() => {
      editorTxt.classList.add('visible');
    }, 300);
  }
}

showStartScreen();

window.addEventListener('keydown', showMainMenu);
window.addEventListener('click', showMainMenu);