const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;


const pintaBackground = () => {
    ctx.fillStyle = '#F3F5FC';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
pintaBackground();

/* Constantes */

const corBoneco = 'black';
const corAcerto = '#0A3871';
const corErro = '#BD1E15';

const canvasFont = '20px Arial';
const raioCabeca = 35;
const maxLetras = 7;
let numLetras;

/* Funções */

function desenhaBase(){
    ctx.fillStyle = corBoneco;
    ctx.fillRect(canvasWidth / 16, canvasHeight * 0.9, canvasWidth / 6, 5); // Base
    ctx.fillRect(canvasWidth / 16 + canvasWidth / 12, canvasHeight * 0.2, 5, canvasHeight * 0.7); // Coluna
    ctx.fillRect(canvasHeight * 0.22, canvasHeight * 0.2, canvasWidth / 6, 5) // Extensão
    ctx.fillRect(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2, 5, canvasWidth / 16); // Suspensão da cabeça
}

function desenhaCabeca(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.arc(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca / 2.2, raioCabeca, 0, Math.PI * 2);
    ctx.stroke();
}

function desenhaCorpo(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca * 1.5);
    ctx.lineTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.stroke();
}

function desenhaPernaEsquerda(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.lineTo(canvasWidth * 0.25, canvasHeight * 0.8);
    ctx.stroke();
}

function desenhaPernaDireita(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.2 + canvasWidth / 12 + raioCabeca + canvasHeight / 3);
    ctx.lineTo(canvasWidth * 0.375, canvasHeight * 0.8);
    ctx.stroke();
}

function desenhaBracoEsquerdo(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.5);
    ctx.lineTo(canvasWidth * 0.25, canvasHeight * 0.55);
    ctx.stroke();
}

function desenhaBracoDireito(){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(canvasHeight * 0.22 + canvasWidth / 6, canvasHeight * 0.5);
    ctx.lineTo(canvasWidth * 0.375, canvasHeight * 0.55);
    ctx.stroke();
}

function desenhaCampo(x){
    ctx.fillStyle = corBoneco;
    ctx.beginPath();
    ctx.moveTo(x, canvasHeight * 0.9);
    ctx.lineTo(x + canvasWidth / 20, canvasHeight * 0.9);
    ctx.stroke();
}

function desenhaCampos(quantidade){
    quantidade = quantidade > maxLetras ? maxLetras : quantidade;
    numLetras = quantidade;
    let x = canvasWidth * 0.42;
    for (let i = 0; i < quantidade; i++){
        desenhaCampo(x);
        x += canvasWidth / 13;
    }
}

function escreveLetra(letra, numCampo){
    let x = canvasWidth * 0.44 + canvasWidth / 13 * numCampo;
    ctx.fillStyle = corBoneco;
    ctx.font = canvasFont;
    if (numCampo < maxLetras) ctx.fillText(letra.toUpperCase(), x, canvasHeight * 0.885);
}

function escrevePalavra(palavra){
    let tamanhoPalavra = palavra.length > numLetras ? numLetras : palavra.length;
    for (let i = 0; i < tamanhoPalavra; i++) escreveLetra(palavra[i], i);
}

function desenhaCaixaErros(){
    let x = canvasWidth * 0.44;
    let y = canvasHeight / 2.3;
    //ctx.strokeStyle = corErro;
    ctx.rect(x, y, canvasWidth / 2, canvasHeight /6);
    ctx.stroke();
    
    ctx.fontStyle = '35px Arial';
    ctx.fillText('Erros', x + canvasWidth / 4.6, y - canvasHeight / 20);
}

function escreveErro(letra, numCampo){
    let extensao = numCampo <= 9 ? numCampo : numCampo - 9;
    let x = canvasWidth * 0.44 + canvasWidth / 20 * extensao;
    let y = numCampo <= 9 ? canvasHeight / 2 : canvasHeight / 1.8;
    ctx.fillStyle = corErro;
    ctx.font = canvasFont;
    ctx.fillText(letra.toUpperCase(), x, y);
}

// escreveErro('A', 1);
// escreveErro('B', 2);
// escreveErro('C', 3);
// escreveErro('D', 4);
// escreveErro('E', 5);
// escreveErro('F', 6);
// escreveErro('G', 7);
// escreveErro('H', 8);
// escreveErro('I', 9);
// escreveErro('J', 10);
// escreveErro('K', 11);
// escreveErro('L', 12);
// escreveErro('M', 13);
// escreveErro('N', 14);
// escreveErro('O', 15);
// escreveErro('P', 16);
// escreveErro('Q', 17);
// escreveErro('R', 18);
// desenhaCaixaErros();

// desenhaBase();
// desenhaCabeca();
// desenhaCorpo();
// desenhaPernaEsquerda();
// desenhaPernaDireita();
// desenhaBracoEsquerdo();
// desenhaBracoDireito();
// desenhaCampos(100);
// escrevePalavra('Abacaxi');
