/**
 * Gestão de eventos - parte 2 formulário
 *  usando State para controlar o evento
 * NOTA: posso repassar parâmetros
 */

// IMPORTANTE importar o useState direto do react
import { useState } from 'react'

function Evento2_State({ msg }) {

    // IMPORTANTE declarar a constante com dois valores
    //  o primeiro em leitura e o segundo em escritura
    const [name, setName] = useState()

    function cadastroUsuario(e) {
        e.preventDefault()
        alert(`Formulário submetido ${name}`);
    }

    return(
        <>
            <form onSubmit={cadastroUsuario}>
                <input 
                    type="text" 
                    placeholder="Digite o texto..." 
                    // IMPORTANTE aqui repasso o valor para
                    //  a parte em escritura da constante
                    onChange={e => setName(e.target.value)} 
                />
                
                <input type="submit" value="cadastro" />
            </form>
        </>
    )
}

export default Evento2_State;