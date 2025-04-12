console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let ting = new Audio("tic-tac-toe_ting.mp3");
let gameOver = new Audio("tic-tac-toe_gameover (1).mp3");

let turn = "X";
let isGameOver = false;
//function to change turn
const changeTurn = () =>{
    if(turn=='X'){
        return 0;
    }
    else{
        return 'X';
    }
}

// const changeTurn = ()=>{
//     return turn === 'X' ? '0':'X';
// }

//function to check win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+ " Won";
            isGameOver = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// game logic starts here 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''  && !isGameOver){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn of "+turn + " player";
                
            }
            
        }
    })
})

//reset function
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn of "+turn + " player";
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw";
})