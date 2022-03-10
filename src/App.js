/**
 * Aula 15 e sucessivas
 * Route para gerenciar mais páginas
 * Atualizações com a versão 6.0
 * https://reactrouter.com/docs/en/v6/upgrading/v5
 * 
 * Termina aqui a parte teorica. Ver projeto Costs
 */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './comp_15mais/a15_Navbar';
import Home from './comp_15mais/a15_Home';
import Empresa from './comp_15mais/a15_Empresa';
import Contato from './comp_15mais/a15_Contato';
import ReactIcons from './comp_15mais/a16_ReactIcons';

function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/empresa' element={<Empresa />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
            <ReactIcons />
        </Router>
    )
}

export default App;