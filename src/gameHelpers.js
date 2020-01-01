export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );

export const checkCollision = (player, stage, {x: moveX, y: moveY}) =>  {
    for(let y = 0; y < player.tetromino.length; y++){
        for(let x = 0; x < player.tetromino[y].length; x++) {

            // Checking we're on an actual tetromino cell 
            if(player.tetromino[y][x] !== 0) {
                if(
                //Check that move is inside the area's height (y)
                !stage[y + player.pos.y + moveY] ||
                //Checks our move i inside the game area's width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                //Checks that cell we're moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ){
                    return true;
                }}
        }
    }
};