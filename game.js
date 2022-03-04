import { draw as drawSnake, update as updateSnake, snakeIntersection, getSnakeHead, getSnakeLength } from './snake.js'
import { draw as drawFood, update as updateFood, outsideGrid } from './food.js'

let gameBoard = document.getElementById('game-board')
let scoreDisplay = document.getElementById('score')
let gameOverMsg = document.getElementById('game-over hide')
let gameOver = false
let score = 0

export let gameSpeed = 250  // milliseconds

export function modifySpeed(newGameSpeed){
    if((gameSpeed-newGameSpeed) > 45){
        gameSpeed-=newGameSpeed
    }else{
        gameSpeed = 45
    }
}

function gameLoop(){
    update()
    draw()

    if(!gameOver){ 
        setTimeout(gameLoop, gameSpeed)

        score = getSnakeLength()
        scoreDisplay.innerHTML = score
    }else{
        gameOverMsg.innerHTML = "you died"
        gameOverMsg.classList.remove('hide')
        gameOverMsg.classList.add('show')
    }
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