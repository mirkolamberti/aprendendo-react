/**
 * Uso das propriedades
 * 
 * Propriedades usadas:
 *  .texto
 */

// Importo o estilo para definir o div
import './a05_FrasePropriedade1.css';

function FrasePropriedades1(props) {

    return(
        <div className="emLinha">Frase1: {props.texto}</div>
    )
}

export default FrasePropriedades1;