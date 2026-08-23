//Kutipan di Judul
const kepala = document.getElementById("kepala");
kepala.className = "kepala";

// Tema
const textMode = [`aset/Moon.png`, `aset/Sun.png`];
let mode = 0;
const bgMode = ["white", "black"];
const toggleBtn = document.createElement("button");
toggleBtn.className = "toggle-tema";
const gambar = document.createElement("img");

gambar.src = textMode[mode];
gambar.className = "gambar-toggle";
toggleBtn.appendChild(gambar);
toggleBtn.style.background = bgMode[mode];
toggleBtn.addEventListener("click", () => {
    gambar.src = textMode[(mode + 1) % textMode.length];
    toggleBtn.style.background = bgMode[(mode + 1) % bgMode.length]
    mode++;
    document.body.classList.toggle("dark-mode");
    const modeAktif = document.body.classList.contains("dark-mode");
    localStorage.setItem("tema", modeAktif ? "gelap" : "terang");
});

// terapkan tema tersimpan saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === "gelap") {
        document.body.classList.add("dark-mode");
        mode = 1;
        gambar.src= textMode[mode];
        toggleBtn.style.background = bgMode[mode];
    }
});

kepala.appendChild(toggleBtn);

const app = document.getElementById("app");
// import tugas
import { toDoList } from './tugas.js';
const apkTDL = toDoList();
//import Cuaca
import { widgetCuaca } from './api.js';
const apkWidgetCuaca = widgetCuaca();
// import Widget
import { widgetKutipan } from './api.js';
const iniKutipan = widgetKutipan()
import { apkCatatan } from './catatan.js';
const catatan = apkCatatan();

const layar2 = document.createElement("section");
layar2.className = "layar2";

const layar3 = document.createElement("section");
layar3.className = "layar3";

const layar4 = document.createElement("section");
layar4.className = "layar4";

app.appendChild(apkTDL);
app.appendChild(layar2);

layar3.appendChild(iniKutipan);
layar3.appendChild(apkWidgetCuaca);
layar4.appendChild(catatan);
layar2.appendChild(layar3)
layar2.appendChild(layar4);