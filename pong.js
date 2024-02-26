
//----------------------------------------------------------------------- JOGO ABAIXO:
//Variaveis para site
let expansao = 2

//variáveis da bolinha
let xBolinha = 300 * expansao;
let yBolinha = 200 * expansao;
let diametroBolinha = 15 * expansao;
let raio = diametroBolinha /2;
// let pontoCentral = 10

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;
let SEUS;

//variáveis da raquete
let xRaquete = 0 * expansao;
let yRaquete = 150 * expansao;

let x2Raquete = 588 * expansao;
let y2Raquete = 150 * expansao;
let velocidadeYOponente;
  
let tamanhoXRaquete = 12 * expansao
let tamanhoYRaquete = 110 * expansao

//velocidade da bolinha
let velocidadeXBolinha = 5 * expansao /2;
let velocidadeYBolinha = 5 * expansao /2;
const velocidadeXBolinhaInicial = velocidadeXBolinha;
const velocidadeYBolinhaInicial = velocidadeYBolinha

//variaveis do retangulo cenografico
let tamanhoXRetangulo = 10 * expansao;
let tamanhoYRetangulo = 60 * expansao;
let posicaoYPrimeiroRet = 1 * expansao;
let posicaoYRet = posicaoYPrimeiroRet + (tamanhoYRetangulo + 30)
let posicaoXRet =  295 * expansao;

// Sons do jogo


function setup() {
  createCanvas(600 * expansao, 400 * expansao);
   // Para repetir a trilha de fundo
//   trilha.play(); // Inicia a trilha de fundo
}

// Restante do seu código...



//desenho do jogo
function draw() {
    // Verifica se o jogo foi iniciado antes de executar a lógica do jogo
    if (jogoIniciado) {
        background(150);
        incluiPlacar();
        marcaPontos();
        cenarioRetangulos();
        instrucoes();
        mostraBolinha();
        //   mostraPontoCentralBola();
        movimentoBolinha();
        mostraRaquete(xRaquete, yRaquete);
        mostraRaquete(x2Raquete, y2Raquete);
        movimentaRaquete();
        movimentaRaqueteOponente();
        interacao();
        colisãoRaquete();
        controles()
    }
}

//circulo
function mostraBolinha(){
  fill(0);
  circle(xBolinha, yBolinha, diametroBolinha);
  fill(255);
  
  
}

// function mostraPontoCentralBola(){
//     fill(color(0,200,0));
//     circle(xBolinha, yBolinha, pontoCentral)
//     fill(255)
// }

//cenário
function cenarioRetangulos(){
  fill(color(255,0,0))
  rect(posicaoXRet , posicaoYPrimeiroRet, tamanhoXRetangulo, tamanhoYRetangulo);
  rect(posicaoXRet , posicaoYRet, tamanhoXRetangulo, tamanhoYRetangulo);
  rect(posicaoXRet , posicaoYRet * 2, tamanhoXRetangulo, tamanhoYRetangulo);
  rect(posicaoXRet , posicaoYRet * 3, tamanhoXRetangulo, tamanhoYRetangulo);
  rect(posicaoXRet , posicaoYRet * 4, tamanhoXRetangulo, tamanhoYRetangulo);
  rect(posicaoXRet , posicaoYRet * 5, tamanhoXRetangulo, tamanhoYRetangulo);
  fill(255);
}

//Mostrando Raquete
function mostraRaquete(x,y){
  rect(x, y, tamanhoXRaquete, tamanhoYRaquete)
}
function movimentaRaquete(){
  if (keyIsDown(83)){
    yRaquete += 10 * expansao / 2;
    if(yRaquete + tamanhoYRaquete > height){
        yRaquete = height - tamanhoYRaquete
    }
  }
  if (keyIsDown(87)){
    yRaquete -= 10 * expansao / 2;
    if(yRaquete < 0){
        yRaquete = 0
    }
  }
}


function colisãoRaquete(){
  if (xBolinha - raio < xRaquete + tamanhoXRaquete && yBolinha - raio < yRaquete + tamanhoYRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  } 
  if (xBolinha + raio > x2Raquete && yBolinha - raio < y2Raquete + tamanhoYRaquete && yBolinha + raio > y2Raquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

//movimento da bolinha
function movimentoBolinha(){
   xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


//consequência se a bolinha tocar a borda
function interacao(){
  if (xBolinha + raio > width||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    ponto.play();
  }
  if (yBolinha + raio > height||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown(DOWN_ARROW)){
    y2Raquete += 10* expansao /2;
    if(y2Raquete + tamanhoYRaquete > height){
        y2Raquete = height - tamanhoYRaquete;
    }
  }
  if (keyIsDown(UP_ARROW)){
    y2Raquete -= 10* expansao /2;
    if (y2Raquete < 0) {
        y2Raquete = 0
    }
  }
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(25*expansao);
  fill(color(255,69,0));
  rect (160 *expansao, 28*expansao, 40*expansao, 26*expansao);
  fill(255);
  text(meusPontos, 180*expansao, 50*expansao);
  textSize(25 * expansao);
  textFont('Helvetica');
  text('P1', 180*expansao, 80*expansao);
  textSize(25*expansao);
  textFont('Helvetica');
  text('P2', 420 *expansao, 80*expansao);
  fill(color(255,69,0));
  rect (400 *expansao, 28 *expansao, 40 *expansao, 26 *expansao);
  fill(255);
  text(oponentePontos, 420*expansao, 50*expansao);
  fill(160);
  textSize(100*expansao)
  textFont('Optien');
  text('NONG', 300*expansao, 220*expansao);
  
  

}

function instrucoes(){
  fill(165);
  textSize(20 * expansao)
  textFont('Helvetica');
  text('PRESS W  or  S ', 100 *expansao, 380*expansao);
  textSize(20*expansao)
  textFont('Helvetica');
  text('PRESS ⬆	 or  ⬇ ', 500*expansao, 380*expansao);
  textSize(15*expansao)
  textFont('Helvetica');
  text('PRESS R FOR RESTART', 300*expansao, 390*expansao);
  
}

function marcaPontos(){
  if (xBolinha + raio > width){
        meusPontos += 1;
        iniciarReinicio();
    }
  if (xBolinha - raio < 0){
        oponentePontos +=1;
        iniciarReinicio();
  }
}

function iniciarReinicio() {
  reiniciarBolinha()
  setTimeout(começarDeNovo, 2000); // 3000 milissegundos = 3 segundos
}

function reiniciarBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
  velocidadeXBolinha = 0;
  velocidadeYBolinha = 0;
}

function começarDeNovo(){
    velocidadeXBolinha = velocidadeXBolinhaInicial;
    velocidadeYBolinha = velocidadeYBolinhaInicial;
}

function controles(){
    if (keyIsDown(82)) {
        iniciarReinicio();
        meusPontos = 0;
        oponentePontos = 0;
        fill(color(81, 0, 60));
        rect (200 *expansao, 355*expansao, 200*expansao, 30*expansao);
        fill(160);
        textSize(30*expansao)
        textFont('Helvetica');
        text('DONE!', 300*expansao, 380*expansao);
        
    }
}