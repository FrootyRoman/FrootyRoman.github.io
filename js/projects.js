console.log('File loaded');

//alle elementen van het HTML bestand
const project1 = document.querySelector('button.button-selector-1');
const project1Show = document.querySelector('div.higher-lower');
const project2 = document.querySelector('button.button-selector-2');
const project2Show = document.querySelector('div.tic-tac-toe');
const project3 = document.querySelector('button.button-selector-3');
const project3Show = document.querySelector('div.webcatalogus');
const project4 = document.querySelector('button.button-selector-4');
const project4Show = document.querySelector('div.dashboard');
const project5 = document.querySelector('button.button-selector-5');
const project5Show = document.querySelector('div.themaweek-1');
const project6 = document.querySelector('button.button-selector-6');
const project6Show = document.querySelector('div.themaweek-2');

//alle addEventListeners van deze HTML bestand
project1.addEventListener('click', showProject1);
project2.addEventListener('click', showProject2);
project3.addEventListener('click', showProject3);
project4.addEventListener('click', showProject4);
project5.addEventListener('click', showProject5);
project6.addEventListener('click', showProject6);

//alle functions van showProject 
function showProject1(){
    project1Show.classList.toggle('hidden');
}
function showProject2(){
    project2Show.classList.toggle('hidden');
}
function showProject3(){
    project3Show.classList.toggle('hidden');
}
function showProject4(){
    project4Show.classList.toggle('hidden');
}
function showProject5(){
    project5Show.classList.toggle('hidden');
}
function showProject6(){
    project6Show.classList.toggle('hidden');
}