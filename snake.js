import { moveInput } from './input.js'

let snake = [
                {x: 11, y: 10},
                {x: 11, y: 11},
                {x: 11, y: 12}
            ]

export function update(){
    console.log(snake)
    let currMove = moveInput()

    if(currMove.x != 0 || currMove.y != 0){
        for (let i = snake.length-1; i > 0; i--){
            snake[i] = snake[i-1]
        }
    }
    
    snake[0].x += currMove.x
    snake[0].y += currMove.y

    console.log(snake)
    console.log(snake.length);
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

export function onSnake(position, { ignoreHead = false } = {}){
    return snake.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function growSnake(rate){
    for (let i = 1; i <= rate; i++){
        snake.push({ ...snake[snake.length]})
    }
}

export function snakeIntersection(){
    return onSnake(snake[0], { ignoreHead: true})
}

export function getSnakeHead(){
    return snake[0]
}

function equalPositions(pos1, pos2){
    return (pos1.x === pos2.x && pos1.y === pos2.y)
}
