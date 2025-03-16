/*const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const rollButton = document.getElementById("roll-button");
const rollResult = document.getElementById("roll-result");

function rollDice() {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;

    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    setTimeout(() => {
        dice1.src = `dice-${value1}.png`;
        dice2.src = `dice-${value2}.png`;
        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");

        const total = value1 + value2;
        let message = "";

        if (value1 === 6 || value2 === 6) {
            message += "Hurry! ";
        }

        if (value1 === value2) {
            message += "Wow! ";
        }

        rollResult.textContent = `You rolled a ${total} (${value1} + ${value2}). ${message}`;
    }, 500); // Delay to allow rotation
}

rollButton.addEventListener("click", rollDice);*/



