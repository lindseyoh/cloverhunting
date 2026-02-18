let isClover1 = false;
let isClover2 = false;
let isClover3 = false;

const clover1 = document.getElementById("clover1");
const cloverButton1 = document.querySelector("#cloverButton1");

const clover2 = document.getElementById("clover2");
const cloverButton2 = document.querySelector("#cloverButton2");

const clover3 = document.getElementById("clover3");
const cloverButton3 = document.querySelector("#cloverButton3");

text4Leaf = document.querySelector("#text4Leaf");
text5Leaf = document.querySelector("#text5Leaf");
cloverForm = document.querySelector("#cloverForm");



cloverButton1.addEventListener('click', () => {
    isClover1 = !isClover1;
    if (isClover1) {
        clover1.src ="files/clover11.png";
        cloverButton1.innerHTML = 'Hide';
        cloverButton1.style.backgroundColor = "#D24211";

    }
    else {
        clover1.src ="files/clover1.png";
        cloverButton1.innerHTML = 'Show';
        cloverButton1.style.backgroundColor = "#879D3C";
    }
});

cloverButton2.addEventListener('click', () => {
    isClover2 = !isClover2;
    if (isClover2) {
        clover2.src ="files/clover22.png";
        cloverButton2.innerHTML = 'Hide';
        cloverButton2.style.backgroundColor = "#D24211";
    }
    else {
        clover2.src ="files/clover2.png";
        cloverButton2.innerHTML = 'Show';
        cloverButton2.style.backgroundColor = "#879D3C";
    }
});

cloverButton3.addEventListener('click', () => {
    isClover3 = !isClover3;
    if (isClover3) {
        clover3.src ="files/clover33.png";
        cloverButton3.innerHTML = 'Hide';
        cloverButton3.style.backgroundColor = "#D24211";
    }
    else {
        clover3.src ="files/IMG_6077.png";
        cloverButton3.innerHTML = 'Show';
        cloverButton3.style.backgroundColor = "#879D3C";
    }
});

cloverForm.addEventListener('click', () => {

    let input4Leaf = document.getElementById("4LeafCount");
    let num4Leaf = Number(input4Leaf.value);
    let input5Leaf = document.getElementById("5LeafCount");
    let num5Leaf = Number(input5Leaf.value);

    if (Number.isNaN(num4Leaf)){
        text4Leaf.innerHTML = 'Enter a number!'
    }
    else if (num4Leaf == 27) {
        text4Leaf.innerHTML = 'BINGO!';
    }
    else if (num4Leaf > 27) {
        text4Leaf.innerHTML = "Lower!";
    }
    else {
        text4Leaf.innerHTML = "Higher!";
    }

    if (Number.isNaN(num5Leaf)) {
        text5Leaf.innerHTML = 'Enter a number!'
    }
    else if (num5Leaf == 4) {
        text5Leaf.innerHTML = 'BINGO!';
    }
    else if (num5Leaf > 4) {
        text5Leaf.innerHTML = "Lower!";
    }
    else {
        text5Leaf.innerHTML = "Higher!";
    }

});

