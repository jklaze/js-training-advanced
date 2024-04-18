let container = document.querySelector(".container");
var enemyPosition = 6;
var prewEnemyPosition

let Matrix = [
    [1,1,1,1,1,1,1],
    [6,6,6,6,6,6,6],
    [2,2,2,2,2,2,2],
    [3,4,3,3,3,3,3],
];

function game(){

    let lastRow = Matrix[Matrix.length-1]
    
    enemyPosition >= 6 ? prewEnemyPosition = null : prewEnemyPosition = enemyPosition + 1;
    if(enemyPosition < 0) enemyPosition = 6

    lastRow.splice(prewEnemyPosition,1,3)
    lastRow.splice(enemyPosition,1,5)
    console.log(lastRow);

    enemyPosition = enemyPosition - 1


    BoardGame()
}

function BoardGame(){
    container.innerHTML = ""

    Matrix.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            let element = document.createElement("div");
            element.classList.add("element");

            characters(column,element)
            ambience(column, element)

            container.appendChild(element); 
        });
    });
}


function ambience(column ,element){
    if(column === 2 ) element.classList.add("Darkgrass");
    if(column === 3 ) element.classList.add("Darkgrass");
    if(column === 1 ) element.classList.add("sky");
    if(column === 6 ) grass(element) 
}

function enemy(element){
    let img = document.createElement("img");
    element.classList.add("Darkgrass");
    img.src = "images/geodude.gif"
    img.style.width = "130px"
    img.style.height = "110px"
    element.appendChild(img)
}

function characters(column,element){
    if(column === 4 ) Pikachu(element)
    if(column === 5 ) enemy(element)
}

function Pikachu(element) {
    let img = document.createElement("img");
    element.classList.add("Darkgrass");
    img.src = "images/pikachu.gif"
    img.style.width = "130px"
    img.style.height = "110px"
    element.appendChild(img)
}

function grass(element) {
    let img = document.createElement("img");
    element.classList.add("sky");
    element.classList.add("b");
    img.src = "images/grass-image.png"
    img.style.width = "144px"
    img.style.height = "110px"
    element.appendChild(img)
}



setInterval(game, 1000);

window.addEventListener("keydown", (event) => {
         if(event.key = "ArrowUp") {
            let PikachuRowPosition = Matrix[Matrix.length-1]
            let PikachuColumnPosition = PikachuRowPosition[1]

            let upperrow = Matrix[Matrix.length-1]
            let uppercolumn = upperrow[1]
            console.log(uppercolumn)
         }
  });
