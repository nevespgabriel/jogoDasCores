//Selecionadores de elementos
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

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

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "Novas Cores";
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor = "steelblue";
    message.textContent = "";
}

//Escolhe a cor vencedora
let pickedColor = pickColor();

//Atualizar o texto de rgb de acordo com a cor escolhida
colorDisplay.textContent = pickedColor;

//Botão para resetar as cores
resetButton.addEventListener("click", reset);

//Inicia quadrados
for(let i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        const clickedColor = this.style.backgroundColor;
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

//Mode buttons
modeButtons.forEach((button) => {
    button.addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent == "Fácil"){
            numSquares = 3;
        } else{
            numSquares = 6;
        }
        reset();
    })
});



