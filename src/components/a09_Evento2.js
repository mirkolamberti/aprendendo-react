/**
 * Gestão de eventos - parte 2 formulário
 * NOTA: posso repassar parâmetros
 */

function Evento2({ msg }) {

    function cadastroUsuario(e) {
        e.preventDefault()
        alert("Formulário submetido");
    }
    return(
        <>
            <form onSubmit={cadastroUsuario}>
                <input type="text" placeholder="Digite o texto..." />
                <input type="submit" value="cadastro" />
            </form>
        </>
    )
}

export default Evento2;