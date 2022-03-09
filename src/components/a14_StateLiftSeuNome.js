/**
 * aula_14
 * Técnica usada para compartilhar o state
 * Eleva o nível do State para o pai do input
 * Centralizamos o state no pai e definimos quem usa e quem define
 */


function StateLiftSeuNome({nomeInput}){
    
    return(
        <>
        <p>Digite seu nome</p>
        <p><input type="text" placeholder="Qual seu nome?" onChange={(e) => nomeInput(e.target.value)} /></p>
        </>
    )
}

export default StateLiftSeuNome;