import { draw as drawSnake, update as updateSnake } from './snake.js'

let gameBoard = document.getElementById('game-board')
let gameSpeed = 50

function gameLoop(){
    update()
    setTimeout(gameLoop, gameSpeed)
}

gameLoop()

function update(){
    gameBoard.innerHTML = ''

    updateSnake()
    drawSnake(gameBoard)

    console.log('test')
}