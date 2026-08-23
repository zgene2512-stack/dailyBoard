import { simpanCatatanKeStorage, muatCatatanDariStorage } from "./storage.js";

function validasiInNote(nilai) {
    if (nilai === "") {
        alert("Input tidak boloh kosong!");
        return false;
    }
    return true;
}

export function apkCatatan() {
    const note = muatCatatanDariStorage()

    // Section Catatan
    const catatan = document.createElement("section");
    catatan.className = "section-catatan";

    const subJudulCatatan = document.createElement("h2");
    subJudulCatatan.textContent = "Catatan";
    subJudulCatatan.classList = "judul";

    const listDaftarCatatan = document.createElement("article");
    listDaftarCatatan.className = "daftar-catatan";

    const inputCatatan = document.createElement("textarea");
    inputCatatan.className = "input-catatan";
    inputCatatan.placeholder = "Masukkan catatan..."

    const tambahBtnCatatan = document.createElement("button");
    tambahBtnCatatan.textContent = "Tambah Catatan";
    tambahBtnCatatan.className = "tambah-catatan";

    // Penambahan
    catatan.appendChild(subJudulCatatan);
    catatan.appendChild(inputCatatan);
    catatan.appendChild(tambahBtnCatatan);
    catatan.appendChild(listDaftarCatatan);

    // Mulai
    let dataCatatan = note ? note : [];

    tambahBtnCatatan.addEventListener("click", () => {
        const noteNow = inputCatatan.value.trim();
        if (validasiInNote(noteNow)) {
            tambahCatatan(noteNow)
        }
    });


    function tambahCatatan(isi) {
        dataCatatan.push({ id: Date.now(), isi, tanggal: new Date().toLocaleDateString() });
        simpanCatatanKeStorage(dataCatatan);
        renderCatatan();
        inputCatatan.value = "";
        inputCatatan.focus();
    }

    function hapusCatatan(id) {
        dataCatatan = dataCatatan.filter((c) => c.id !== id);
        simpanCatatanKeStorage(dataCatatan);
        renderCatatan();
    }

    function editCatatan(id, catatanBaru) {
        dataCatatan = dataCatatan.map((c) =>
            c.id === id ? { ...c, isi: catatanBaru } : c
        );
        simpanCatatanKeStorage(dataCatatan);
        renderCatatan();
    }

    function renderCatatan() {
        listDaftarCatatan.innerHTML = "";

        dataCatatan.forEach((catatan) => {
            const div = document.createElement("div");
            div.className = "catatan-item";
            div.innerHTML = `
            <p>${catatan.isi}</p>
            <small>${catatan.tanggal}</small>
        `;

            const catatanBtnDel = document.createElement("button");
            catatanBtnDel.textContent = "Hapus";
            catatanBtnDel.className = "hapus-catatan";

            catatanBtnDel.addEventListener("click", () => hapusCatatan(catatan.id));

            div.addEventListener("dblclick", () => {
                const noteNew = prompt("Masukkan catatan baru:", catatan.isi);
                if (noteNew !== null) {
                    if (validasiInNote(noteNew)) {
                        editCatatan(catatan.id, noteNew);
                    }
                }
            })

            div.appendChild(catatanBtnDel);
            listDaftarCatatan.appendChild(div);
        });
    }

    renderCatatan();

    return catatan;
};