var container=document.querySelector("#container");
let gridsRowColumn=16;
const button=document.querySelector(".user");

createGrid()

let colorList=["aqua", "fuchsia", "green", "lime", "maroon", "olive", "orange", "purple", "red",'yellow']

function createGrid(){
    container.style.display="flex";
    container.style.flexWrap="wrap";
    container.style.width= "720px";
    container.style.backgroundColor="black";
    container.style.padding="3px";
    container.style.borderWidth="3px solid black";


    let smallDivSize= (720/gridsRowColumn);

    for(let i=0;i<gridsRowColumn*gridsRowColumn;i++){
        const smallDiv=document.createElement("div");
        smallDiv.style.borderWidth="5px solid black";
        smallDiv.style.width=`${smallDivSize}px`;
        smallDiv.style.height=`${smallDivSize}px`;
        smallDiv.style.backgroundColor="white";
        smallDiv.style.boxShadow = "inset 0px 0px 0px 1px black";
        container.appendChild(smallDiv);
        smallDiv.addEventListener("mouseover",()=>{
            smallDiv.style.backgroundColor=colorList[Math.round((Math.random()*10))];
        });
    }
}

button.addEventListener('click',()=>{
    container.innerHTML="";
    gridsRowColumn=parseInt(prompt("Enter the number of grids per column/row",16));
    createGrid();
});
