let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msg = document.querySelector("p");
let msgCont = document.querySelector(".msg-container");
let turnOfO = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let resetGame = ()=>{
     turnOfO = true;
    enableBoxes();
    
}

let count =0;

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("Button was clicked");
        count++;
        if(count === 9){
            console.log("MATCH DRAW")
        }
        if(turnOfO ===true){
        box.innerText ="O";
        turnOfO = false;
        box.style.color = "red"
       }else{
        box.innerText="X";
        turnOfO = true;
        box.style.color = "black"
       }
       box.disabled = true;

      checkWinner();
    })
})

let disableBoxes = (box) =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let enableBoxes = (box) =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        msgCont.classList.add("hide")
    }
}

let showWinner =(winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

let matchDraw = () =>{
    if(count === 9){
        msg.innerText =`Well played but match is draw`;
        msgCont.classList.remove("hide");
    }
}




let checkWinner =()=>{
    for(let pattern of winningPattern){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1 == posval2 && posval2 == posval3){
              console.log("WINNER", posval1);
              showWinner(posval1);
            }
        }
        }
       
            
        matchDraw();
}

resetButton.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
