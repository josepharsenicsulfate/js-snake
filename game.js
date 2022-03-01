import { draw as drawSnake, update as updateSnake, snakeIntersection, getSnakeHead } from './snake.js'
import { draw as drawFood, update as updateFood, outsideGrid } from './food.js'

let gameBoard = document.getElementById('game-board')
let gameOver = false
const gameSpeed = 50  // milliseconds

function gameLoop(){
    update()
    draw()

    if(gameOver){
        if(confirm('Game over. Press ok to restart.')){
            window.location = '/'
        }
        return
    }

    setTimeout(gameLoop, gameSpeed)
}

gameLoop() // initiate loop

function update(){
    gameBoard.innerHTML = ''

    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}