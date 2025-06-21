< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <title>Stone Paper Scissors</title>
                <style>
                    body {
                        font - family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
    }
                    button {
                        margin: 10px;
                    padding: 10px 20px;
                    font-size: 18px;
                    cursor: pointer;
    }
                    #result {
                        font - size: 24px;
                    margin-top: 30px;
    }
                </style>
        </head>
        <body>
            <h1>Stone Paper Scissors Game</h1>

            <div>
                <button onclick="play('Stone')">🪨 Stone</button>
                <button onclick="play('Paper')">📄 Paper</button>
                <button onclick="play('Scissors')">✂ Scissors</button>
            </div>

            <div id="result"></div>

            <script>
                function play(userChoice) {
      const choices = ['Stone', 'Paper', 'Scissors'];
                const computerChoice = choices[Math.floor(Math.random() * 3)];

                let result = '';

                if (userChoice === computerChoice) {
                    result = "It's a draw!";
      } else if (
                (userChoice === 'Stone' && computerChoice === 'Scissors') ||
                (userChoice === 'Paper' && computerChoice === 'Stone') ||
                (userChoice === 'Scissors' && computerChoice === 'Paper')
                ) {
                    result = 'You win!';
      } else {
                    result = 'Computer wins!';
      }

                document.getElementById('result').innerHTML =
                `<p>You chose: <strong>${userChoice}</strong></p>
                <p>Computer chose: <strong>${computerChoice}</strong></p>
                <p><strong>${result}</strong></p>`;
    }
            </script>
        </body>
    </html>