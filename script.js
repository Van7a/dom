console.log(document.title)
document.title="Novi sajt"
console.log(document.all)
console.dir(document.all[8])
document.alltextContent="Nesto drugo"
console.log(document.getElementById("main-title"));
document.getElementById("main-title").texContent="Drugi naslov"


let mainTitle=document.getElementById("main-title");
mainTitle.textContent="Treci naslov"

console.log(document.getElementsByClassName("list-item"))
let items=document.getElementsByClassName("list-item");


items[2].textContent="Zamenjeno"
items[2].style.backgroundColor="red"

for(let i=0;  i<items.length ; i++ ){
    if  (i %2==0){
        items[i].style.backgroundColor="grey"
    }
}