// $( document ).ready(function() {
//     console.log( "siap" );
// });

$(function() {
    $("#isi").html("<h1>belajar jquery</h1>");

    $("button").click(function (e) {
        e.preventDefault();
        alert("Belajar Javascript");
    }) ;

    $("#isi").mouseleave(function () { 
        alert("mouse Leave");
    });
});