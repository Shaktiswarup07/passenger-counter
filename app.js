let count=0;
let countEl=document.getElementById("count-el");
var saveEl=document.getElementById("save-el");
function increment(){
    count++;
    countEl.innerText=count;
}
function save(){
    saveEl.textContent+=count+" - "
    countEl.textContent=0
    count=0
}