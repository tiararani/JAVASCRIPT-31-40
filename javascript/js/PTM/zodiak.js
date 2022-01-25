zodiak.onclick = function () {
    let bulan = document.querySelector("#bulan").value;
    let tanggal = document.querySelector("#tanggal").value;
    let zodiak =  "";
    if (bulan == 1 && tanggal >=19) {
        zodiak = "cancer";
    }
    document.querySelector("#hasil").innerHTML = zodiak;
};


    
