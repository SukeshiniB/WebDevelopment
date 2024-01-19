const play = document.querySelector('.play');
const restart = document.querySelector('.restart');
const blocks = document.querySelectorAll(".game-block");
const levelno = document.querySelector("#levelno");
const result = document.querySelector('#result');
const leaderboard = document.querySelector('.leaderboard');
const blocksArr = Array.from(blocks);

let order = [];
let canPlayerPlay;
let level = 1;
let score = 0;
let pastScores = [];
const levels = {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    10: 11,
}

window.addEventListener('DOMContentLoaded', () => {
    const prevScores = JSON.parse(window.localStorage.getItem('scores'));
    if (prevScores && prevScores.length) {
        pastScores = [...prevScores];
        for (const prevScore of prevScores) {
            const scoreEl = document.createElement('li');
            scoreEl.innerText = `Your score is ${prevScore}.`;
            leaderboard.appendChild(scoreEl);
        }
    }
});

const flash = (block) => {
    canPlayerPlay = false;
    return new Promise((resolve, _) => {
        blocksArr[block].classList.add("selected");
        setTimeout(() => {
            blocksArr[block].classList.remove("selected");
            setTimeout(() => {
                resolve();
            }, 200)
        }, 600)
    })
};

blocksArr.forEach((block,idx) => {
        block.addEventListener('click', () => {
            const scoreEl = document.createElement('li');
            if (canPlayerPlay) {
                block.classList.add("selected");
                setTimeout(() => {
                    block.classList.remove("selected");
                },100);
                const expectedBlock = order.shift();
                if (expectedBlock === idx) {
                    if (order.length === 0) {
                        ++score;
                        setTimeout(() => {
                            result.innerText = `You won this round! Click on play to play the next level`;
                            canPlayerPlay = false;
                            ++level;
                            levelno.innerText = `Level ${level}`
                        },200);
                    }
                } else {
                    result.innerText = `You lost this round! Click on play to start again!`;
                    canPlayerPlay = false;
                    level = 1;
                    order.length = 0;
                    levelno.innerText = `Level 1`
                    scoreEl.innerText = `Your score is ${score}.`;
                    leaderboard.appendChild(scoreEl);
                    pastScores.push(score);
                    window.localStorage.setItem('scores', JSON.stringify(pastScores));
                    score = 0;
                }
            }
    });
});

play.addEventListener('click', async () => {
    order.length = 0;
    result.innerText = "";
    for (let i = 0; i < levels[level]; i++) {
        order.push(Math.floor(Math.random() * 4));
    }
    for (const block of order) {
        await flash(block);
        canPlayerPlay = true;
    }
});

restart.addEventListener('click', () => {
    order.length = 1;
    level = 1;
    levelno.innerText = `Level 1`;
    result.innerText = "";
});



