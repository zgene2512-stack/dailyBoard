import { simpanKeStorage, muatDariStorage } from "./storage.js";

// Validasi Input
function validasiInput(nilai) {
    if (nilai.trim() === "") {
        alert("Input tidak boleh kosong!");
        return false;
    }
    if (nilai.length > 100) {
        alert("Input maksimal 100 karakter!");
        return false;
    }
    return true;
}

function debounce(fn, delay = 1500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay)
    }
}

export function toDoList() {
    // 1. Muat Data dari Storage
    const dataStorage = muatDariStorage();

    let daftarTugas = dataStorage ? dataStorage : [
        { id: 1, nama: "JavaScript", selesai: false },
        { id: 2, nama: "TypeScript", selesai: false },
    ];

    // FIX 1: Cari ID tertinggi biar ID item baru gak bakal bentrok
    let nextId = daftarTugas.length;
    let wadahPindah = null;

    // Elemen DOM
    const tugas = document.createElement("section");
    tugas.id = "sectugas";
    tugas.className = "section-tugas";

    const subJuduTugas = document.createElement("h2");
    subJuduTugas.className = "judul";
    subJuduTugas.textContent = "Tugas";

    const daftar = document.createElement("article");
    daftar.className = "daftar-list";

    const input = document.createElement("input");
    input.placeholder = "Masukkan Tugas...";
    input.className = "input-tugas";

    const tambahBtn = document.createElement("button");
    tambahBtn.textContent = "Tambah Tugas";
    tambahBtn.className = "tambah-tugas";

    // Filter
    const filter = document.createElement("select");
    filter.className = "filter";

    const filterSemua = document.createElement("option");
    filterSemua.textContent = "Semua";
    filterSemua.value = "semua";
    const filterSudah = document.createElement("option");
    filterSudah.textContent = "Sudah";
    filterSudah.value = "sudah";
    const filterBelum = document.createElement("option");
    filterBelum.textContent = "Belum";
    filterBelum.value = "belum";

    filter.appendChild(filterSemua);
    filter.appendChild(filterSudah);
    filter.appendChild(filterBelum);

    // Pencarian
    const wadahSearch = document.createElement("article");
    wadahSearch.className = "article-cari";
    const inpCari = document.createElement("input");
    inpCari.placeholder = "Cari Tugas...";
    inpCari.className = "cari-tugas";

    // Event Listeners
    const cariTugasDebounced = debounce((kataKunci) => {
        const apapun = daftar.querySelectorAll("li");
        apapun.forEach((listTugas) => {
            console.log(listTugas)
            const teks = listTugas.firstChild.textContent.toLowerCase();
            if (teks.includes(kataKunci)) {
                listTugas.classList.remove("hide");
            } else {
                listTugas.classList.add("hide");
            }
        }
        );
    }, 1000);


    inpCari.addEventListener("input", (e) => {
        const kataKunci = e.target.value.trim().toLowerCase();
        cariTugasDebounced(kataKunci);
    });

    tambahBtn.addEventListener("click", () => {
        const nilai = input.value.trim();
        if (validasiInput(nilai)) {
            tambahTugas(nilai);
        }
    });

    filter.addEventListener("change", () => renderTugas(filter.value));

    // Susun Elemen UI
    wadahSearch.appendChild(inpCari);
    tugas.appendChild(subJuduTugas);
    tugas.appendChild(wadahSearch);
    tugas.appendChild(input);
    tugas.appendChild(tambahBtn);
    tugas.appendChild(filter);
    tugas.appendChild(daftar);

    // LOGIKA FUNGSI DATA
    function tambahTugas(nama) {
        daftarTugas.push({ id: nextId++, nama, selesai: false });
        input.value = "";
        input.focus();
        simpanKeStorage(daftarTugas);
        renderTugas(filter.value);
    }

    function hapusTugas(id) {
        daftarTugas = daftarTugas.filter((t) => t.id !== id);
        // FIX 2: Hapus nextId-- supaya tidak merusak penomoran ID
        simpanKeStorage(daftarTugas);
        renderTugas(filter.value);
    }

    function toggleSelesai(id) {
        daftarTugas = daftarTugas.map((t) =>
            t.id === id ? { ...t, selesai: !t.selesai } : t
        );
        simpanKeStorage(daftarTugas);
        renderTugas(filter.value);
    }

    function editTugas(id, namaBaru) {
        daftarTugas = daftarTugas.map((t) =>
            t.id === id ? { ...t, nama: namaBaru } : t
        );
        simpanKeStorage(daftarTugas);
        renderTugas(filter.value);
    }

    // Render Tugas
    function renderTugas(filterStatus = "semua") {
        daftar.innerHTML = "";
        const list = document.createElement("ul");
        list.className = "list-tugas";

        const tugasTersaring = daftarTugas.filter((t) => {
            if (filterStatus === "sudah") return t.selesai;
            if (filterStatus === "belum") return !t.selesai;
            return true;
        });

        tugasTersaring.forEach((listTugas) => {
            const li = document.createElement("li");
            li.className = "li";
            li.dataset.id = listTugas.id;

            const spanNama = document.createElement("span");
            spanNama.className = "span-nama";
            spanNama.textContent = listTugas.nama;
            spanNama.style.textDecoration = listTugas.selesai ? "line-through" : "none";

            spanNama.addEventListener("click", () => toggleSelesai(listTugas.id));

            li.addEventListener("dblclick", () => {
                const tugasAnyar = prompt("Masukkan nama tugas:", listTugas.nama);
                if (validasiInput(tugasAnyar)) {
                    editTugas(listTugas.id, tugasAnyar);
                }
            });

            const spanHapus = document.createElement("span");
            spanHapus.className = "hapus-tugas";
            spanHapus.textContent = "\u00d7";

            spanHapus.addEventListener("click", () => hapusTugas(listTugas.id))

            li.appendChild(spanNama);
            li.appendChild(spanHapus);
            list.appendChild(li);

            // Drag and Drop
            li.setAttribute("draggable", true);
            li.addEventListener("dragstart", () => {
                wadahPindah = listTugas.id; // Simpan ID item yang di-drag
                li.classList.add("move")
            });
        });

        list.addEventListener("dragover", (e) => e.preventDefault());
        list.addEventListener("drop", (e) => {
            e.preventDefault();

            const targetLi = e.target.closest("li");
            if (!targetLi) return;

            const targetId = Number(targetLi.dataset.id);
            targetLi.classList.remove("move")


            if (wadahPindah && wadahPindah !== targetId) {
                // FIX 3: Tukar posisi item di dalam array daftarTugas
                const idxAsal = daftarTugas.findIndex(t => t.id === wadahPindah);
                const idxTujuan = daftarTugas.findIndex(t => t.id === targetId);

                const [itemPindah] = daftarTugas.splice(idxAsal, 1);
                daftarTugas.splice(idxTujuan, 0, itemPindah);

                simpanKeStorage(daftarTugas);
                renderTugas(filter.value); // Render ulang urutan terbaru
            }
        });

        daftar.appendChild(list);
    }

    // Render Awal
    renderTugas();
    return tugas;
}