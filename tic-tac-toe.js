let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetGame");
let winner=document.querySelector(".winner");
let message=document.querySelector("#message");
let turn0 = true;
const winPatterns = [
  [0, 1, 2],  // Top row
  [3, 4, 5],  // Middle row
  [6, 7, 8],  // Bottom row
  [0, 3, 6],  // Left column
  [1, 4, 7],  // Middle column
  [2, 5, 8],  // Right column
  [0, 4, 8],  // Diagonal from top-left to bottom-right
  [2, 4, 6],  // Diagonal from top-right to bottom-left
];
boxes.forEach(function(box){
  box.addEventListener('click', function(){
      console.log("box was clicked");
      if(turn0===true){
        box.innerText="O";
        turn0=false;}
      else{
        box.innerText="X"
        turn0=true;
      }
      box.disabled=true;
      checkWinner();

      })
        })
    function disableBoxes(){
      for(let box of boxes){
        box.disabled=true;
      }
    }
    function enableboxes(){
      for(let box of boxes){
        box.disabled=false;
        box.innerText="";
      }
    }
    function showWinner(goat){
      message.innerText = `${goat}-WINS`
      winner.classList.remove("hide");
    }
    function checkWinner(){
      for(let i=0;i<winPatterns.length;i++){
        // console.log(winPatterns[i]);
        let pattern=winPatterns[i];
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText;
        if(value1!=""&&value2!=""&&value3!=""){
          if(value1===value2&& value2===value3){
            console.log("you won nigga",value1);
            disableBoxes();
            showWinner(value1);
          }
        }
      }
}

  function reset_game(){
      turn0=true;
      enableboxes();
      winner.classList.add("hide");
  }
  reset.addEventListener("click",reset_game);
