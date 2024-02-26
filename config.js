//Configurações necessárias:
const trilha = new Audio('trilha.mp3')
let raquetada = document.getElementById("raquetada");
let ponto = document.getElementById("ponto");
    window.onload = function() {
    var body = document.querySelector("body");
        var h3 = document.createElement("h3");
        h3.textContent = "Feito pelo Nick";
        body.appendChild(h3);
    };
        
        let jogoIniciado = false; // Variável para indicar se o jogo foi iniciado
        
        // Ouvinte de evento de clique para iniciar o jogo
        document.getElementById("startButton").addEventListener("click", iniciarJogo);
        
        function iniciarJogo() {
            jogoIniciado = true; // Define a variável como true após o clique no botão
            document.getElementById("startButton").style.display = 'none'
            if (trilha.paused){
                trilha.play()
        }
            trilha.play();
            trilha.loop = true
            document.addEventListener('keydown', bloquearTeclas);
    }
        function bloquearTeclas(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault(); // Impede o comportamento padrão das teclas de seta para cima e para baixo
        }
    }
    bloquearTeclas();

