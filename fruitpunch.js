function btnfruitJugadorA() {
    alert('SELECCIONASTE TU FRUTA');
}

function iniciarJuego() {
}

    let btnfruitJugador = document.getElementById('btnfruit');
    btnfruitJugador.addEventListener('click', btnfruitJugadorA);
    
    window.addEventListener('load', iniciarJuego);

    function selectFrutaGamer() {
        let inputsandia = document.getElementById('sandia').innerHTML;
        let inputcereza = document.getElementById('cereza').innerHTML;
        let inputavellana = document.getElementById('avellana').innerHTML;
        let inputpapaya = document.getElementById('papaya').innerHTML;
    
        if (inputsandia.checked) {
            alert("Usted ha seleccionado SANDIA");
        } else if (inputcereza.checked) {
            alert("Usted ha seleccionado CEREZA");
        } else if (inputavellana.checked) {
            alert("Usted ha seleccionado AVELLANA");
        } else if (inputpapaya.checked) {
            alert("Usted ha seleccionado PAPAYA");
        }
    }    