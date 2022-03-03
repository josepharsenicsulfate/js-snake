let move = { x: 0, y: 0 }
let lastMove = { x: 0, y: 0 }

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            e.preventDefault()
            if(lastMove.y != 0) break
            move = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            e.preventDefault()
            if(lastMove.y != 0) break
            move = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            e.preventDefault()
            if(lastMove.x != 0) break
            move = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            e.preventDefault()
            if(lastMove.x != 0) break
            move = { x: 1, y: 0 }
            break
    }
})

export function moveInput(){
    lastMove = move
    return move 
}