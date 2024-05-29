function btnfruitJugadorA() {
    alert('SELECCIONASTE TU FRUTA');
}

function iniciarJuego() {
    let ataqueJugador, ataqueEnemigo;

    function ataqueCitrico() {
        ataqueJugador = "Citrico";
        alert(ataqueJugador);
        ataqueEnemigo = atributoDeAtaqueEnemigo();
    }

    function atributoDeAtaqueEnemigo() {
        let atributo = "";
        let atributoAleatorio = aleatorio(1, 3);

        if (atributoAleatorio == 1) {
            atributo = "Citrico";
        } else if (atributoAleatorio == 2) {
            atributo = "Dulce";
        } else if (atributoAleatorio == 3) {
            atributo = "Tropical";
        }
        return atributo;
    }

    function combate(callback) {
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
      if (vidasEnemigo > 0 && vidasJugador > 0) {

        if (ataqueJugador == ataqueEnemigo) {
            callback("EMPATE");
        } else if ((ataqueJugador == "Citrico" && ataqueEnemigo == "Secos") ||
            (ataqueJugador == "Seco" && ataqueEnemigo == "Tropical") ||
            (ataqueJugador == "Dulce" && ataqueEnemigo == "Seco")) {
            callback("GANASTE");
        } else {
            callback("PERDISTE");
        } vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador;
        ;
      }
    }

    combate(function(resultado) {
        crearMensaje(resultado);
    });
}