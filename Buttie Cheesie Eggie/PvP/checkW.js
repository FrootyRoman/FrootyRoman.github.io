//Haalt alles op in HTML
let t1 = document.querySelector(".t1")
let t2 = document.querySelector(".t2")
let t3 = document.querySelector(".t3")
let t4 = document.querySelector(".t4")
let t5 = document.querySelector(".t5")
let t6 = document.querySelector(".t6")
let t7 = document.querySelector(".t7")
let t8 = document.querySelector(".t8")
let t9 = document.querySelector(".t9")

let Xwinner = false
let Owinner = false
//Kijkt wie heeft gewonnen
function checkWinner(){
    if (t1.textContent == "X" && t2.textContent == "X" && t3.textContent == "X"){
        Xwinner = true
    } else if(t4.textContent == "X" && t5.textContent == "X" && t6.textContent == "X"){
        Xwinner = true
    } else if(t7.textContent == "X" && t8.textContent == "X" && t9.textContent == "X"){
        Xwinner = true
    } else if(t1.textContent == "X" && t4.textContent == "X" && t7.textContent == "X"){
        Xwinner = true
    } else if(t2.textContent == "X" && t5.textContent == "X" && t8.textContent == "X"){
        Xwinner = true
    } else if(t3.textContent == "X" && t6.textContent == "X" && t9.textContent == "X"){
        Xwinner = true
    } else if(t1.textContent == "X" && t5.textContent == "X" && t9.textContent == "X"){
        Xwinner = true
    } else if(t3.textContent == "X" && t5.textContent == "X" && t7.textContent == "X"){
        Xwinner = true
    }

    if (t1.textContent == "O" && t2.textContent == "O" && t3.textContent == "O"){
        Owinner = true
    } else if(t4.textContent == "O" && t5.textContent == "O" && t6.textContent == "O"){
        Owinner = true
    } else if(t7.textContent == "O" && t8.textContent == "O" && t9.textContent == "O"){
        Owinner = true
    } else if(t1.textContent == "O" && t4.textContent == "O" && t7.textContent == "O"){
        Owinner = true
    } else if(t2.textContent == "O" && t5.textContent == "O" && t8.textContent == "O"){
        Owinner = true
    } else if(t3.textContent == "O" && t6.textContent == "O" && t9.textContent == "O"){
        Owinner = true
    } else if(t1.textContent == "O" && t5.textContent == "O" && t9.textContent == "O"){
        Owinner = true
    } else if(t3.textContent == "O" && t5.textContent == "O" && t7.textContent == "O"){
        Owinner = true
    }

    if (Xwinner == true){
        alert("X heeft gewonnen!")
        window.location.reload();
    } else if (Owinner == true){
        alert("O heeft gewonnen!")
        window.location.reload();
    }
}

