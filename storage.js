//=====================================================

const kunci_tugas = "daftarTugas";

const kunci_catatan = "dataCatatan";

//Local Storage To Do List
export function simpanKeStorage(daftarTugas) {
    localStorage.setItem(kunci_tugas, JSON.stringify(daftarTugas));
}

export function muatDariStorage() {
    const data = localStorage.getItem(kunci_tugas);
    return data ? JSON.parse(data) : null;
}

//======================================================

//================================================
//Local Storage Catatan
export function simpanCatatanKeStorage(dataCatatan) {
    localStorage.setItem(kunci_catatan, JSON.stringify(dataCatatan));
}

export function muatCatatanDariStorage() {
    const data = localStorage.getItem(kunci_catatan);
    return data ? JSON.parse(data): null;
}

//=================================================