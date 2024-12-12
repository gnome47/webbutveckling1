let förnamn = document.getElementById("förnamn")
let efternamn = document.getElementById("efternamn")
let resultat = document.getElementById("resultat")

function skapaEmail(){
    resultat.innerHTML = förnamn.value + efternamn.value + "@gmail.com"
}

function changeC() { 
    var x = Math.floor(Math.random() *256),
        y = Math.floor(Math.random() * 256),
        z = Math.floor(Math.random() * 256);

    return  "rgb(" + x + "," + y + "," + z + ")";
};