//Constantes
const colors = [
    "rgb(255, 0, 0)", 
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)"
];

//Selecionadores de elementos
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");

//Escolhe a cor vencedora
let pickedColor = colors[0]

//Atualizar o texto de rgb de acordo com a cor escolhida
colorDisplay.textContent = pickedColor;

//Inicia quadrados
for(let i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    //Adiciona captores de clicks
    squares[i].addEventListener("click", function(){
        //Conseguir a cor do quadrado clicado
        const clickedColor = this.style.backgroundColor;
        //Comparar a cor com a cor vencedora
        if(clickedColor == pickedColor){
            alert("GANHOU!!");
        } else {
            alert("FRACASSOU!");
        }
    })
}