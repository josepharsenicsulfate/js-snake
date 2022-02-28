import { moveInput } from './input.js'

let snake = [
                {x: 10, y: 11},
                {x: 11, y: 11}
            ]

export function update(){
    const currMove = moveInput()

    for (let i = snake.length - 2; i >= 0; i--){
        snake[i + 1] = { ...snake[i] }
    }

    snake[0].x += currMove.x
    snake[0].y += currMove.y
}

export function draw(gameBoard){
    for(let i = 0; i < snake.length; i++){
        let snakeElement = document.createElement('div')

        snakeElement.style.gridColumnStart = snake[i].x
        snakeElement.style.gridRowStart = snake[i].y
        snakeElement.classList.add('snake')

        gameBoard.appendChild(snakeElement)
    }
}