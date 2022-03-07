/**
 * Componente filho do EventoRepassaProps
 *  Ele contém o componente que é mostrado na tela
 *  mas chama uma função no componente pai
 */

function Pulsante(props){

    // NOTA: sendo só uma linha, não precisa parenteses
    return <button onClick={props.event}>{props.text}</button>
}

export default Pulsante;