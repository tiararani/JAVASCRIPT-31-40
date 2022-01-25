function tampil(b) {
    a = document.querySelector("p").innerText = "Belajar event js " + b;
    // a.innerText = "Belajar event js";
    console.log("belajar event js");
}

judul.onclick = function () {
    document.querySelector(".isi").innerHTML = "belajar event js menggunakan id";
}