/**
 * Listar valores
 */

import RenderizarListasEfetiva from "./a13_RenderizarListasEfetiva";

function RenderizarListas(){

    // Gero uma lista que pode ser feita lendo um db
    const listaItens = ['Bola', 'Avião', 'Peixe', 'Carbonara']
    return(
        <>
            <p>Lista 1:</p>
            <RenderizarListasEfetiva itens={listaItens} />
            <p>Lista 2:</p>
            <RenderizarListasEfetiva itens={[]}/>
        </>
    )
}

export default RenderizarListas;