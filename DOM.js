document.addEventListener("DOMContentLoaded", (event) => {
    const container=document.querySelector("#container");
    let gridsRowColumn=16
    const button=document.querySelector(".user");
    button.addEventListener('click',()=>{
        gridRowColumn=parseInt(prompt("Enter the number of grids per column/row",16));
        container.innerHTML="";
        generateGrid(gridsRowColumn);
    });

    container.style.display="flex";
    container.style.flexWrap="wrap";
    container.style.maxWidth= "350px";
    container.style.borderWidth="3px solid black";
    // for(let i=0;i<gridsRowColumn;i++){
    //     for(let j=0;j<gridsRowColumn;j++){
    //         const smallDiv=document.createElement("div");
    //         smallDiv.style.borderWidth="30px";
    //         container.appendChild(smallDiv);
    //     }
    // }
});