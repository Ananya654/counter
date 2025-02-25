
let countPS = document.getElementById("count-ps")
let saveEL = document.getElementById("save-el")

let count = 0;

function increment(){
     count += 1;
     countPS.textContent = count;
     
}

function save(){
    let text = count + " - ";
    saveEL.textContent += text;
    countPS.textContent = 0;
    count = 0;
}


