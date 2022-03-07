/**
 * Uso dos tipos de dados nas propriedades
 * 
 */

import TipoPropriedade from 'prop-types';

function PropriedadeTipos({nome, idade}) {
    return(
        <>
            <li>Nome: {nome} - {idade} anos</li>
        </>
    )
}

PropriedadeTipos.propTypes = {
    nome: TipoPropriedade.string.isRequired,
    idade: TipoPropriedade.number,
}

PropriedadeTipos.defaultProps = {
    nome: 'Falta o nome!',
    idade: 0,
}

export default PropriedadeTipos;