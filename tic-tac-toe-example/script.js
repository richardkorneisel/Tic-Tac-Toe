const main = document.querySelector('main');
const resetBtn = document.querySelector('button');
const announcement = document.querySelector('.announcement');
const squares = document.querySelectorAll('main div');

let turn = 0;

const winningStates = [
    [
        1,0,0,
        1,0,0,
        1,0,0
    ],
    [
        0,1,0,
        0,1,0,
        0,1,0
    ],
    [
        0,0,1,
        0,0,1,
        0,0,1
    ],
    [
        1,1,1,
        0,0,0,
        0,0,0
    ],
    [
        0,0,0,
        1,1,1,
        0,0,0
    ],
    [
        0,0,0,
        0,0,0,
        1,1,1
    ],
    [
        1,0,0,
        0,1,0,
        0,0,1
    ],
    [
        0,0,1,
        0,1,0,
        1,0,0
    ],
];

/**
 * Checks if a winner exists. If one does, returns true and sets the winner in the
 * announcement. If one does not exist, return false.
 */
const isThereAWinner = () => {
    /**
     * Loop though all the winning states and see if the state of the red or blue
     * squares match one of them. If there is a match, there is a winner
     */
    winningStates.forEach((state) => {
        let redCount = 0;
        let blueCount = 0;

        state.forEach((position, index) => {
            /**
             * Check if the the position is among the winning positions in the pattern.
             * If it is, check if a red or blue square is in that position.
             */
            if(position === 1) {
                if(squares[index].dataset.color === 'red') {
                    ++redCount;
                } else if (squares[index].dataset.color === 'blue') {
                    ++blueCount;
                }
            } 
        });

        /**
         * It takes 3 squares of the same color in winning positions to win the game.
         */
        if (redCount === 3) {
            announcement.innerHTML = 'Red wins!';
            return true;
        } else if (blueCount === 3) {
            announcement.innerHTML = 'Blue wins!';
            return true;
        }
    });

    return false;
};

const resetGame = (event) => {
    turn = 0;
    announcement.innerHTML = 'Play the game!';

    squares.forEach(square => {
        square.dataset.color = '';
    });
};

const playTurn = (event) => {
    const square = event.target;

    if(square.dataset.color == undefined || square.dataset.color.length === 0) {
        turn++;
        let color = turn%2 === 0 ? 'blue' : 'red';
        let colorsTurn = turn%2 === 0 ? 'red' : 'blue';

        announcement.innerHTML = colorsTurn +"'s turn";
        square.dataset.color = color;
    } else {
        announcement.innerHTML = 'Pick another square';
    }

    if(!isThereAWinner() && turn > 8) {
        announcement.innerHTML = 'There is a tie';
    }
}

main.addEventListener('click', playTurn);
resetBtn.addEventListener('click', resetGame);