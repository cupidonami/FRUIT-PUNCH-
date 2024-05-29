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
        if (ataqueJugador == ataqueEnemigo) {
            callback("EMPATE");
        } else if ((ataqueJugador == "Citrico" && ataqueEnemigo == "Secos") ||
            (ataqueJugador == "Seco" && ataqueEnemigo == "Tropical") ||
            (ataqueJugador == "Dulce" && ataqueEnemigo == "Seco")) {
            callback("GANASTE");
        } else {
            callback("PERDISTE");
        }
    }

    combate(function(resultado) {
        crearMensaje(resultado);
    });
}