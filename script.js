//Selecionadores de elementos
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");

let numSquares = 6;

//Funções
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const generateRandomColors = (num) => {
    let output = [];
    for(let c=0; c<num; c++){
        output.push(generateRandomColor());
    }
    return output;
}

let colors = generateRandomColors(numSquares);

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Escolhe a cor vencedora
let pickedColor = pickColor();

//Atualizar o texto de rgb de acordo com a cor escolhida
colorDisplay.textContent = pickedColor;

//Botão para resetar as cores
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "Novas cores";
    for(let i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

//Botão Fácil
easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let c=0; c<squares.length; c++){
        if(colors[c]){
            squares[c].style.backgroundColor = colors[c]; 
        } else{
            squares[c].style.display = "none";
        }
    }
})

//Botão Difícil
hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let c=0; c<squares.length; c++){
        squares[c].style.display = "block";
        squares[c].style.backgroundColor = colors[c]; 
    }
})

//Inicia quadrados
for(let i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    //Adiciona captores de clicks
    squares[i].addEventListener("click", function(){
        //Cor do quadrado clicado
        const clickedColor = this.style.backgroundColor;
        //Comparar a cor com a cor vencedora
        if(clickedColor == pickedColor){
            message.textContent = "Correto!";
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            resetButton.textContent = "Jogar Novamente";
        } else {
            this.style.backgroundColor = "black";
            message.textContent = "Tente novamente";
        }
    })
}

