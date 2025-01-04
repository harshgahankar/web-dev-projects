let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#re-btn");
let turnO = true;
const winpt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("the button was click");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

reset_btn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        boxes.forEach((box) => {
            box.disabled=false;
        })
        turnO = true;
    })
})

const checkWin = () => {
    for(let pst of winpt){
       
        let pst1 = boxes[pst[0]].innerText;
        let pst2 = boxes[pst[1]].innerText;
        let pst3 = boxes[pst[2]].innerText;
        console.log(pst1)

        if( pst1 != "" && pst2 != "" && pst3 != ""){
            if( pst1 === pst2 && pst2 === pst3){
                alert(`The Winner Is ${pst1}`);
                boxes.forEach((box) => {
                    box.disabled=true;
                })
            }
        }
    }
    
};