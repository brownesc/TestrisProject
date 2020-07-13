// document.addEventListener('DOMContentLoaded',()=> {
//     //Finds the element with the class grid
//     const grid = document.querySelector('.grid');
//     //Find all the relevant squares
//     let squares = Array.from(document.querySelectorAll('.grid div'));

//     const ScoreDisplay = document.querySelector('#score');
//     const StartButton = document.querySelector('#start-button');
//     const width = 10;
//     const lTetromino = [
//         [1,width+1,width*2+1,-4],
//         [width,width+1,width+2,width*2+3],
//         [1,width+1,width*2+1,width*2],
//         [width,width*2,width*2+1,width*2+2]
//     ];

//     const theTetraminoes = [lTetromino];
    
//     let currentPosition=4;
//     let current = theTetraminoes[0][0];
//     // Adds tetramino style to the board
//     function draw() {
//         current.forEach(index => {
//             squares[currentPosition+index].classList.add('tetromino')
//         })
        
//     };

//     draw();
// })
document.addEventListener('DOMContentLoaded',()=>{
    let gameBoar = new Board(20,10);
    console.log(gameBoar.grid);
    console.log(gameBoar.grid);   
    function f1() {
        var y = window.setTimeout(gameBoar.changeBoard,2*2000,10,5);
    
        
    }
    f1()
    
    
    

    

})



