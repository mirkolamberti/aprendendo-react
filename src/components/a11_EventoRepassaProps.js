/**
 * Aula 11 - Ativar uma function no componente pai
 *  passando-a como parâmetro no componente filho
 * Também quero repassar parâmetros no evento
 */

import Pulsante from "./a11_EventoRepassaProps/Pulsante";

function EventoRepassaProps(){

    function primeiroEvento() {
        alert(`Primeiro evento`);
    }

    function segundoEvento(param) {
        alert(`Segundo evento ${param}`);
    }

    function terceiroEvento(param, msg) {
        alert(`Terceiro evento ${param} ${msg}`);
    }

    return(
        <div>
            <p>Sala dos botões</p>
            <Pulsante event={primeiroEvento} text="Primeiro evento" />
            <Pulsante event={() => segundoEvento("mensagem")} text="Segundo evento" />
            <Pulsante event={() => terceiroEvento("mensagem", "end")} text="Terceiro evento" />
        </div>
    )
}

export default EventoRepassaProps;