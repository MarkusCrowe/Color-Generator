// creer 3 varible pour stocker 3 chiffre aleatoires
let number1 = 0;
let number2 = 0;
let number3 = 0;

// Donner au body une couleur de fond en rgb()
// Montrer sur le body la couleur de rgb()

setInterval(() => {
    number1 = Math.floor(Math.random() * 255);
    number2 = Math.floor(Math.random() * 255);
    number3 = Math.floor(Math.random() * 255);
    document.body.style.background = `rgb(${number1}, ${number2}, ${number3})`;
    tag.textContent = `rgb(${number1}, ${number2}, ${number3})`;
}, 1500);

// body.style.background = "rgb(" + number1 + ", " + number2 + ", " + number3 + ")";
