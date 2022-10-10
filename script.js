
// //Method #1

// const body = document. querySelector('body');

// const board = document.createElement('div');
// board.style.display = 'grid';
// board.style.gridTemplateColumns = "11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1%";
// body.appendChild(board);
    


// function ColumnCreator(){
//     for(var i=0;i<9;i++){
//         const Column = document.createElement('div');
//         board.appendChild(Column);
//         Column.style.height="100%"
//         if(i%2==0){
//             for(var j=0;j<9;j++){
//                 const square = document.createElement('div');
//                 Column.appendChild(square);
//                 square.style.height = "11.1%";
//                     if(j%2==0){
//                         square.style.backgroundColor = 'red';
//                     }else{
//                         square.style.backgroundColor = 'black';
//                     }
//             }
//         }
//         else{
//             for(var j=0;j<9;j++){
//                 const square = document.createElement('div');
//                 Column.appendChild(square);
//                 square.style.height = "11.1%";
//                     if(j%2==0){
//                         square.style.backgroundColor = 'black';
//                     }else{
//                         square.style.backgroundColor = 'red';
//                     }
//             }
//         }
//     }
//     return square;
// }

// ColumnCreator();

// //QUESTIONS//
// //why dont my percentage symbols work on lines 24 and 34:
// //square.style.height = "11.1%";
// //square.style.height = "11.1%";



//- - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - -

//Method #2

const body = document. querySelector('body');
const squareContainer = document.createElement('div');
body.appendChild(squareContainer);

function squareCreator(){
    for(var i=0;i<81;i++){
        var colors = ['red','blue','green','yellow','orange','purple','lightblue','white'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        if(i%2==0){
            var square = document.createElement('div');
            square.style.float="left";
            square.style.width = "11.1%";
            square.style.height="11.1%";
            square.style.paddingBottom="11.1%"
            square.style.backgroundColor = random_color;
            squareContainer.appendChild(square);
        }
        else{
            var square = document.createElement('div');
            square.style.float="left";
            square.style.width = "11.1%";
            square.style.height="11.1%";
            square.style.paddingBottom="11.1%"
            square.style.backgroundColor = random_color;
            squareContainer.appendChild(square); 
        }
    }
return square;
console.log(random_color)
}

squareCreator();
