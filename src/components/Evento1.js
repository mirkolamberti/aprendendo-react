/**
 * Gestão de eventos - parte 1
 * NOTA: posso repassar parâmetros
 */

function Evento1({ msg }) {

    function evMsgSaudar() {
        alert(`Obrigado por clicar :-) ${msg}`);
    }

    return(
        <>
            <button onClick={evMsgSaudar}>Clica aqui</button>
        </>
    )
}

export default Evento1;