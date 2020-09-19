//Creando las referencias
var butPiedra = document.getElementById("but-piedra");
var butPapel = document.getElementById("but-papel");
var butTijera = document.getElementById("but-tijera");

butPiedra.addEventListener("click", press);
butPapel.addEventListener("click", press);
butTijera.addEventListener("click", press);

function press(){
    alert("Me presionaron");
}