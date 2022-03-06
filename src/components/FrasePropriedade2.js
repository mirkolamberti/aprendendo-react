/**
 * Uso das propriedades
 * 
 * Propriedades usadas:
 *  .texto
 */

// Importo o estilo com nome para definir o div
import styles from "./FrasePropriedade2.module.css";

function FrasePropriedades2({texto, ponto}) {

    return(
        <div className={styles.emLinha}>Frase2: {texto}{ponto}</div>
    )
}

export default FrasePropriedades2;