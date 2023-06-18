let first = true
let clicks = 0
let Oturn
//start butten die ervoor zorgt dat hij bepaald wie begint
function start(){
    if(first == true){
        first = false 
        let randomStarter = Math.floor(Math.random()*2)
        if (randomStarter == 0){
            Oturn = false
            document.getElementById("showTurn").innerHTML = "Bot" + "<br>" + "Turn";
            bot()
        } else{
            Oturn = true
            document.getElementById("showTurn").innerHTML = "Player" + "<br>" + "Turn";
        }
    }
}
//vult de box in met O
function change(event){
    if (event.target.textContent == "" && Oturn == true){
        Oturn = false
        clicks += 1
        event.target.textContent = "O";
        document.getElementById("showTurn").innerHTML = "Bot" + "<br>" + "Turn";
        checkWinner()
        setTimeout(bot, 1000)
    }
}
//geeft aan elke box een addEventListener
const tiles = document.querySelectorAll(".box");
for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener("click", change);
}
//wins worden reset
let resetbutton = document.querySelector(".resetWinButton")
resetbutton.addEventListener("click", reset)

function reset(){
    let confirmation = confirm("Are you sure that you want to reset the win amounts?")
    if(confirmation == true){
        localStorage.clear()
        OwinAmount = 0
        XwinAmount = 0
        winAmount()
    }
}