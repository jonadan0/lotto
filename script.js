document.addEventListener("DOMContentLoaded", function() {
    function generateLottoNumbers() {
        let numbers = [];
        while (numbers.length < 6) {
            let randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }

    function createRouletteBalls() {
        let roulette = document.getElementById('roulette');
        roulette.innerHTML = '';
        for (let i = 1; i <= 45; i++) {
            let ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = i;
            roulette.appendChild(ball);
        }
    }

    function animateRoulette() {
        let balls = document.querySelectorAll('.ball');
        let interval = setInterval(() => {
            balls.forEach(ball => {
                ball.style.order = Math.floor(Math.random() * 45);
            });
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            let numbers = generateLottoNumbers();
            let numbersDiv = document.getElementById('numbers');
            numbersDiv.textContent = '추천 번호: ' + numbers.join(', ');
            balls.forEach(ball => {
                if (numbers.includes(parseInt(ball.textContent))) {
                    ball.style.backgroundColor = '#ff0000';
                } else {
                    ball.style.backgroundColor = '#007bff';
                }
            });
        }, 5000); // Adjust the duration of the roulette animation here
    }

    document.getElementById('generate-btn').addEventListener('click', () => {
        createRouletteBalls();
        animateRoulette();
    });
});
