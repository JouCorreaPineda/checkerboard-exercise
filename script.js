//create a variable that represents the body element present in our html file.
const body = document. querySelector('body');

//create a div element to place inside of our body element
const board = document.createElement('div');
    //add that div element into our body element
    body.appendChild(board);
    //convert that element into a grid with 9 columns of width 11.1%
    board.style.display = 'grid';
    board.style.gridTemplateColumns = "11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1% 11.1%";
    

//This function will create everything within the board
function ColumnCreator(){
    //for every column
    for(var i=0;i<9;i++){
        //create the column div element
        const Column = document.createElement('div');
        //add it to the board div
        board.appendChild(Column);
        //if the column number is even
        if(i%2==0){
            //if the 
            for(var j=0;j<9;j++){
                const square = document.createElement('div');
                Column.appendChild(square);
                square.style.height = "11.1%";
                    if(j%2==0){
                        square.style.backgroundColor = 'red';
                    }else{
                        square.style.backgroundColor = 'black';
                    }

            }
        }else{
            for(var j=0;j<9;j++){
                const square = document.createElement('div');
                Column.appendChild(square);
                square.style.height = "11.1%";
                    if(j%2==0){
                        square.style.backgroundColor = 'black';
                    }else{
                        square.style.backgroundColor = 'red';
                    }
            }

        }
        
    }
    return square;
}

ColumnCreator();


