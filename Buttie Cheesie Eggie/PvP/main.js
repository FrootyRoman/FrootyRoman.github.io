let first = true
let turn = ""
//Kiest een random speler uit die mag beginnen
function start(){
    if(first == true){
        first = false 
        let randomStarter = Math.floor(Math.random()*2)
        if (randomStarter == 0){
            turn = "X"
            document.getElementById("starterText").innerText = turn;
        }
        else {
            turn = "O"
            document.getElementById("starterText").innerText = turn;
        }
    }
}
//zorgt ervoor dat de players om de buurt gaan
function change(event){
    if (event.target.textContent == ""){
        event.target.textContent = turn;
        if (turn == "X"){
            turn = "O"
            document.getElementById("starterText").innerText = turn;
        } else{
            turn = "X"
            document.getElementById("starterText").innerText = turn;
        }
    }

    checkWinner()
}
//hij geeft aan elke box een addEventListener
const tiles = document.querySelectorAll(".box")

for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener("click", change);
}