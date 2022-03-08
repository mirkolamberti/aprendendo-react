/**
 * Listar valores usando a função map
 * 
 * NOTA: cada item precisa de um identificativo unívoco
 *  posso usar a propriedade index do .map
 * 
 * Aqui uso também o if (em JSX) para deixar
 *  uma mensagem no caso a lista seja vazia
 */

function RenderizarListasEfetiva({itens}){

    return(
        <>
            {itens.length > 0 ? (   // Verifico se tem elementos

                // Esta é a paste que gera a lista
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                )
                )

            ) : ( // Aqui é o else
                <p>Nenhum elemento</p>
            )
            }
        </>
    )
}

export default RenderizarListasEfetiva;