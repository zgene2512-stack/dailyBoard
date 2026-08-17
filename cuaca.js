//==================================================

async function ambilCuaca(kota, infoCuaca) {
    const apiKey = "18841e293493445a30cd12b4f150c108";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric`;
    

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Kota tidak ditemukan");
        const data = await res.json();

        const kodeIkon = data.weather[0].icon;
        const urlIkon = `https://openweathermap.org/img/wn/${kodeIkon}@2x.png`;

        infoCuaca.innerHTML = `
            <strong>${data.name}: ${data.main.temp}°C</strong>
            <div>
                <img src="${urlIkon}" alt="${data.weather[0].description}" class="ikon-cuaca" />
            </div>
            <strong>${data.weather[0].description}</strong>
        `
    } catch (error) {
        infoCuaca.textContent = error.message;
    }
}



export function widgetCuaca() {
    // Membuat
    const cuaca = document.createElement("section"); // Section Cuaca
    cuaca.className = "section-cuaca";

    const subJudulCuaca = document.createElement("h2");
    subJudulCuaca.textContent = "Cuaca";
    subJudulCuaca.classList = "judul";

    const infoArc = document.createElement("article");
    infoArc.className = "info-article";
    
    const labelCuaca = document.createElement("label");
    labelCuaca.textContent = "Kota: ";
    labelCuaca.className = "label-cuaca";  
    
    const inputKota = document.createElement("input");
    inputKota.placeholder = "Masukkan Nama Kota";
    inputKota.className = "input-kota"; 
    
    const tombolCuaca = document.createElement("button");
    tombolCuaca.textContent = "Cek";
    tombolCuaca.className = "tombol-cuaca";   
    
    const info = document.createElement("div");
    info.textContent = "Memuat Info Cuaca...";
    info.className = "info-cuaca";    

    // Event Listener
    tombolCuaca.addEventListener("click", () => {
        const namaKota = inputKota.value.trim();
        ambilCuaca(namaKota, info);
        inputKota.value = "";
    });


    //Menambahkan
    cuaca.appendChild(subJudulCuaca);
    cuaca.appendChild(labelCuaca);
    cuaca.appendChild(inputKota);
    cuaca.appendChild(tombolCuaca);
    cuaca.appendChild(infoArc)
    infoArc.appendChild(info);

    //Kembali
    ambilCuaca("Kyoto", info);
    return cuaca;
};