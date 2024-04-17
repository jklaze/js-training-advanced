let Matrix = 
[
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2],
    [3,4,3,3,5,3,3],
];
//
let container = document.querySelector(".container");
console.log(container);


Matrix.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
        let element = document.createElement("div");
       
        container.appendChild(element); 
        element.classList.add("element");
        if(column === 4 ) Pikachu(element)
        if(column === 5 ) Hitch(element)

        ambience(column, element)

    });
});

function ambience(column ,element){
    if(column === 2 ) element.classList.add("grass");
    if(column === 3 ) element.classList.add("Darkgrass");
    if(column === 1 ) element.classList.add("sky");
}

function Pikachu(element) {
    let img = document.createElement("img");
    element.classList.add("Darkgrass");
    img.src = "images/pikachu.gif"
    img.style.width = "130px"
    img.style.height = "110px"
    element.appendChild(img)
}

function Hitch(element) {
    let img = document.createElement("img");
    element.classList.add("Darkgrass");
    img.src = "images/geodude.gif"
    img.style.width = "130px"
    img.style.height = "110px"
    element.appendChild(img)
}