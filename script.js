const images = [];
for (let i = 1; i <= 6; i++) {
    images.push(`images/dice${i}.png`);
}

function rollDice() {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').src = images[random1 - 1];
    document.querySelector('.img2').src = images[random2 - 1];

    const result = document.querySelector('.result');
    if (random1 > random2) {
        result.textContent = 'Dice 1 is bigger!';
    } else if (random1 < random2) {
        result.textContent = 'Dice 2 is bigger!';
    } else {
        result.textContent = 'Both dice are equal!';
    }
}

document.getElementById('button').addEventListener('click', rollDice);
