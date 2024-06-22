function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // nao precisa colocar != null, pois o javaScript ja entende se deixar apenas elemento && 
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('elemento nao e um audio!');
    }

}

// Seleciona todas as teclas
// document.querySelectorAll('.tecla');

//Atribuindo a lista selecionada pelo querySelectorAll uma constante
const listaDeTeclas = document.querySelectorAll('.tecla');

//Percorrendo a lista 
for (let contador= 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; // constante para guardar o valor da lista de teclas no indice do contador, dessa forma deixando o codigo mais limpo

    const instrumento = tecla.classList[1]; //constante instrumento para guardar a classe especifica de cada som

    const idAudio = `#som_${instrumento}`; //constante idAudio para guardar o id com a constante do instrumento, deve utilizar a crase para conseguir usar a variavel

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
