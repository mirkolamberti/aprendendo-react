/**
 * aula_14
 * Técnica usada para compartilhar o state
 * Eleva o nível do State para o pai do input
 * Centralizamos o state no pai e definimos quem usa e quem define
 */


// Gero a stringa de saudação
function gerarSaudacao(nomeIn){
    return `Olá ${nomeIn}, tudo bem?`
}

function StateLiftSaudacao({nomeOutput}){
    
    return(
        <>
        <p>{gerarSaudacao(nomeOutput)}</p>
        </>
    )
}

export default StateLiftSaudacao;