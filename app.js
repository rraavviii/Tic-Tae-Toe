let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
let playbtn=document.querySelector("#play");
let pl1=document.createElement("h2");
let pl2=document.createElement("h2");
const playerInputs = document.querySelector(".player-inputs");
playbtn.addEventListener("click",()=>{
   
    pl1.innerText=`${p1.value} vs `;
    pl2.innerText=`${p2.value}`;
    let player=document.querySelector(".player");
    player.appendChild(pl1);
    player.appendChild(pl2);
    pl1.style.backgroundColor="green";
            pl2.style.backgroundColor="red";
    
    // Hide player input elements

    playerInputs.style.display = "none";
    
    console.log(p1.value,p2.value);
})


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
let count=0;

const resetgame=()=>{
    
    playerInputs.style.display = "block";
    turn0=true;
    enableboxes();
    count=0;
    msgcontainer.classList.add("hide");
};

const draw=()=>{
    msgcontainer.classList.remove("hide");
    msg.innerText="Match Draw";
  
}





boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("clicked")
        pl1.style.backgroundColor="red";
            pl2.style.backgroundColor="green";
        if(turn0){
            
        box.innerText="0"
        box.style.backgroundColor = "green";
        turn0=false;
        count++;

        }
        else{
            pl1.style.backgroundColor="green";
            pl2.style.backgroundColor="red";
            box.innerText="X";
            box.style.backgroundColor = "red";
            turn0=true;
            count++;
        }
        // console.log(count);
        if(count===9){
            draw();
        }
        else{
            box.disabled=true;
            
            checkwinner();
        }
    });
});

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.removeProperty("background-color");
    }
}



const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showinner=(winner)=>{
    if(winner==="0"){
    msg.innerText=`Congratulation, Winner is ${p1.value}`;
    }
    else{
        msg.innerText=`Congratulation, Winner is ${p2.value}`;
    }
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


 

 
