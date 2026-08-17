//Kutipan di Judul
const kepala = document.getElementById("kepala");
kepala.className = "kepala";

const kutipan = document.createElement("div");
kutipan.className = "kutipan-harian";

const kutipanText = document.createElement("p");
kutipanText.textContent = "Memuat kutipan...";
const kutipanAuthor = document.createElement("p");

kepala.appendChild(kutipan);
kutipan.appendChild(kutipanText);
kutipan.appendChild(kutipanAuthor);


// Main

// Kutipan Harian
async function ambilKutipan() {
    try {
        const res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
        const data = await res.json();
        kutipanText.textContent = data.quote;
        kutipanAuthor.textContent = "- " + data.author;
        console.log(data);
    } catch (error) {
        console.log("Gagal mengambil kutipan:", error);
    }
}

// Tema
const textMode = ["Dark", "Light"];
let mode = 0;
const bgMode = ["black", "gray"];
const toggleBtn = document.createElement("button");
toggleBtn.textContent = textMode[mode];
toggleBtn.className = "toggle-tema";

toggleBtn.addEventListener("click", () => {
    toggleBtn.textContent = textMode[(mode + 1) % 2];
    toggleBtn.style.color = bgMode[(mode + 1) % 2];
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
        toggleBtn.textContent = textMode[mode];
        toggleBtn.style.color = bgMode[mode];
    }
});

kepala.appendChild(toggleBtn);

const app = document.getElementById("app");

//import Cuaca
import { widgetCuaca } from './cuaca.js';
const apkWidgetCuaca = widgetCuaca();
// import tugas
import { toDoList } from './tugas.js';
const apkTDL = toDoList();
// import catatan
import { apkCatatan } from './catatan.js';
const catatan = apkCatatan();

//Garis
const garis4 = document.createElement("hr");
const garis = document.createElement("hr");
const garis2 = document.createElement("hr");

app.appendChild(apkWidgetCuaca);
app.appendChild(garis4);
app.appendChild(apkTDL);
app.appendChild(garis);
app.appendChild(catatan);
catatan.appendChild(garis2);

// // Muat semua
const status = document.createElement("p");
app.appendChild(status);

async function muatSemuaWidget() {
    status.textContent = "Memuat data...";

    await ambilKutipan();

    status.textContent = "Data berhasil dimuat";
}

window.addEventListener("DOMContentLoaded", muatSemuaWidget);

