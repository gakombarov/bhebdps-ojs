function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

function checkGameStatus() {
    if (dead === 10) {
        alert('Вы победили!');
        resetGame();
    } else if (lost === 5) {
        alert('Вы проиграли!');
        resetGame();
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead++;
            document.getElementById('dead').textContent = dead;
        } else {
            lost++;
            document.getElementById('lost').textContent = lost;
        }
        checkGameStatus();
    }
}