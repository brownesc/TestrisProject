/**
 * 
 */
class Board {
// AF(height,width): Creates a tetris board with 
//
// 
// 
// 
//  
    grid;
    //Reset the board when you start a game
    constructor(height,width) {
        this.height = height;
        this.width = width;
        let container = document.querySelectorAll('main .container');        
        for (var i=0; i<this.height;i++){
            for (var j=0; j<this.width; j++) {
                let cell = document.createElement('div');
                cell.className = 'cell';
                container[0].appendChild(cell);        
            }
        }
        this.grid = Array.from(document.querySelectorAll('main .container .cell'));
    }

    changeBoard(newHeight,newWidth) {
        setTimeout
        let container = document.querySelectorAll('main .container');  
        container[0].innerHTML='';     
        for (var i=0; i<newHeight;i++){
            for (var j=0; j<newWidth; j++) {
                let cell = document.createElement('div');
                cell.className = 'cell';
                container[0].appendChild(cell);        
            }
        }
        this.grid = Array.from(document.querySelectorAll('main .container .cell'));


    }
    }