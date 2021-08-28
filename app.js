const btn = document.getElementById("btn");
const title = document.querySelector(".text");
const joke = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const buttonText = [
    "Ugh.",
    "🤦🏻‍♂️",
    "omg dad.",
    "you are the worst",
    "seriously",
    "stop it.",
    "please stop",
    "that was the worst one",
];

btn.addEventListener('click', function () {
    fetchJoke();
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHexNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    btn.textContent = buttonText[getRandomNumber()]
});

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const dadJoke = await response.json();
    joke.textContent = dadJoke.joke;
}

function getRandomHexNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getRandomNumber() {
    return Math.floor(Math.random() * buttonText.length);
}
