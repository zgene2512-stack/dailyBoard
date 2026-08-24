//=================================================

// Kutipan Harian
async function ambilKutipan(kutipanText, kutipanAuthor) {
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

export function widgetKutipan() {
    const sectionArticle = document.createElement("section");
    sectionArticle.className = "section-article";

    const kutipan = document.createElement("article");
    kutipan.className = "kutipan-harian";

    const kutipanText = document.createElement("p");
    kutipanText.textContent = "Memuat kutipan...";
    const kutipanAuthor = document.createElement("p");
    kutipanAuthor.style.marginTop = "20px";
    const refresh = document.createElement("button");
    refresh.className = "refresh-btn";
    refresh.textContent = "\u21BB";

    kutipan.appendChild(kutipanText);
    kutipan.appendChild(kutipanAuthor);
    kutipan.appendChild(refresh);
    sectionArticle.appendChild(kutipan)

    refresh.addEventListener("click", () => ambilKutipan(kutipanText, kutipanAuthor))

    ambilKutipan(kutipanText, kutipanAuthor);
    return sectionArticle;
}

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

    const infoArc = document.createElement("article");
    infoArc.className = "info-article";

    const inputKota = document.createElement("input");
    inputKota.placeholder = "Masukkan Nama Kota";
    inputKota.className = "input-kota";

    const tombolCuaca = document.createElement("button");
    tombolCuaca.textContent = "Sync";
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
    cuaca.appendChild(inputKota);
    cuaca.appendChild(tombolCuaca);
    cuaca.appendChild(infoArc)
    infoArc.appendChild(info);

    //Balik Kampung
    ambilCuaca("Kyoto", info);
    return cuaca;
};