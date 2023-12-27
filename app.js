let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;
const winpaterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const draw=()=>{
    msgcontainer.classList.remove("hide");
    msg.innerText="Match Draw";
}



let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("clicked")
        if(turn0){
        box.innerText="0"
        turn0=false;
        count++;

        }
        else{
            
            box.innerText="X";
            box.style.color="red";
            turn0=true;
            count++;
        }
        // console.log(count);
        if(count===9){
            draw();
        }
        box.disabled=true;

        checkwinner();
    });
});

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=() =>{
for(pattern of winpaterns){
   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;

   if(pos1val!="" && pos2val!="" && pos3val!=""){
       if(pos1val===pos2val && pos2val===pos3val){
        // console.log(`${pos1val} is winner`);
        showinner(pos1val);
       }
   }
}
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


 