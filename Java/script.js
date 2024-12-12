let rubrik = document.getElementById("rubrik")

let rubrikÄndrad = false

function ändraRubrik(){
    if(rubrikÄndrad == false){
        rubrik.innerHTML = "Sike, Du är inte välkommen"
        rubrikÄndrad = true
    } else {
        rubrik.innerHTML = "Välkommen"
        rubrikÄndrad = false
    }
}