console.log('hello world')
let allCells = document.querySelectorAll('.cell');
console.log(allCells)
let player = 'blue';

for(let i=0; i<9; i++) {
    allCells[i].addEventListener('click', runGame)
}

function runGame(event){
    console.log('this works')
    // is it red or blue
    if(player == 'blue'){
    event.target.classList.add('blue');
    event.target.removeEventListener('click, runGame')
    player = 'red'
    } 
    else if (player == 'red') {
        event.target.classList.add('red');
        event.target.removeEventListener('click, runGame')c
        player = 'blue'
    }

}

// function reset (){

// }

