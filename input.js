let move = {x: 0, y: 0}

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            move = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            move = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            move = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            move = { x: 1, y: 0 }
            
        console.log(move)
        console.log(e.key)
    }
})

export function moveInput(){
    return move
}