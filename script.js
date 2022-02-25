const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump() {

    dino.classList.add('jumpAnimation');
    setTimeout(() => {
        dino.classList.remove('jumpAnimation');
    }, 750);
    
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jumpAnimation')) {
        jump();
    }
});

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    
    if (rockLeft < 0) {
        rock.style.display = 'none';
    } 
    else {
        rock.style.display = '';
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop> 275) {
        alert("You got a score of: " + score.innerText +'\n'+ "Click OK to play again"); 
        location.reload();
        score = 0;
    }
}, 70);

