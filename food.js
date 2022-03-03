import { onSnake, growSnake } from './snake.js'

let GRID_SIZE = 21
let food = getFoodRandomPosition()
const rate = 1

export function update(){
    if(onSnake(food)){
        growSnake(rate)
        food = getFoodRandomPosition()
    }
}

export function draw(gameBoard){
    let foodElement = document.createElement('div')

    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    foodElement.classList.add('food')

    gameBoard.appendChild(foodElement)
}

export function outsideGrid(position){
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}

function getFoodRandomPosition(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE + 1),
        y: Math.floor(Math.random() * GRID_SIZE + 1)
    }
}

