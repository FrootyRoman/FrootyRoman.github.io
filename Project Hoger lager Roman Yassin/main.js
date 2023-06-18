function startGame(){

    alert("Welkom bij het spel Hoger Lager.")
    alert ("Het spel gaat als volgd, je gooit 2 dobbelstenen en je kiest of de dealer Hoger of Lager gaat gooien.")
    alert ("Je krijgt 10 credits gratis")

    let imgArray = [6];
    imgArray[0] = "/Project Hoger lager Roman Yassin/Dice-1-b.svg.png";
    imgArray[1] = "/Project Hoger lager Roman Yassin/Dice-2-b.svg.png";
    imgArray[2] = "/Project Hoger lager Roman Yassin/Dice-3-b.svg.png";
    imgArray[3] = "/Project Hoger lager Roman Yassin/Dice-4-b.svg.png";
    imgArray[4] = "/Project Hoger lager Roman Yassin/Dice-5-b.svg.png";
    imgArray[5] = "/Project Hoger lager Roman Yassin/Dice-6-b.svg.png";

    let credits = 10;
    
while(credits>0) {
        let inzet = prompt("Hoeveel credits zet je in?")
        console.log(inzet)
        if(parseInt(inzet) <= playerpoints){
            dice1 = rollDice(1);
            dice2 = rollDice(2);
            alert("De dealer gooit: " + dice1);
            guess = prompt("Kies HOGER of LAGER");
            if (dice1 < dice2 && guess  == "HOGER"){
        
                alert("Het is correct");
                playerpoints += parseInt(inzet);
                localStorage.setItem(playername, playerpoints);
                credits += parseInt(inzet);
            }   
            else if (dice1 > dice2 && guess == "LAGER"){
                alert(" Het is correct");
                playerpoints += parseInt(inzet);
                localStorage.setItem(playername, playerpoints);
                credits += parseInt(inzet);        
            }
            else {
                alert("Het is incorrect");
                playerpoints -= parseInt(inzet);
                localStorage.setItem(playername, playerpoints);
                credits -= parseInt(inzet);
            }
        } 
        else{
            alert("U heeft niet genoeg punten");
        }
        console.log("Credits: ", credits);
    }
    

    
}

let imgArray = [6];
imgArray[0] = "/Project Hoger lager Roman Yassin/Dice-1-b.svg.png";
imgArray[1] = "/Project Hoger lager Roman Yassin/Dice-2-b.svg.png";
imgArray[2] = "/Project Hoger lager Roman Yassin/Dice-3-b.svg.png";
imgArray[3] = "/Project Hoger lager Roman Yassin/Dice-4-b.svg.png";
imgArray[4] = "/Project Hoger lager Roman Yassin/Dice-5-b.svg.png";
imgArray[5] = "/Project Hoger lager Roman Yassin/Dice-6-b.svg.png";


let dice1 = rollDice();
let dice2 = rollDice();
let guess;

const ja = false;
let playername = prompt("Hoe heet je?"); 
localStorage.setItem(playername, 100);
let playerpoints = localStorage.getItem(playername);
console.log(playerpoints);
console.log(localStorage);



function rollDice(z){
    console.log("rollDice()");
    let image1 = document.getElementById("1");
    let image2 = document.getElementById("2");
    let image3 = document.getElementById("3");
    let image4 = document.getElementById("4");
    const x = Math.floor(Math.random() * 6)+1;
    const y = Math.floor(Math.random() * 6)+1;
    if (z == 1){
        image1.src = imgArray[x-1]
        image2.src = imgArray[y-1]

        console.log("z:1 imageArray x:", x, imgArray[x-1])
        console.log("z:1 imageArray y:", y, imgArray[y-1])
    } else {
        image3.src = imgArray[x-1]
        image4.src = imgArray[y-1]

        console.log("z:0 imageArray x:", x, imgArray[x-1])
        console.log("z:0 imageArray y:", y, imgArray[y-1])
    }

    console.log("Dice values: ", x+y);
    return(x+y);
}