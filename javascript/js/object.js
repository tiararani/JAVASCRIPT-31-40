const objek = {

    nama : "tiara rani",
    telp : 12345678,

    buah : ['apel', 'jeruk', 'mangga'], 

    coba : function () {
        return "coba function dalam objek";
    },

    boleh : true,
    "tulis aja" : 12344321,
}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[2]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);
