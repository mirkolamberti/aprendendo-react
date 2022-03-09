/**
 * Aula 15 - Menu de router
 * 
 */

import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            Menu:&nbsp;
            <Link to="/">Home</Link>&nbsp;|&nbsp; 
            <Link to="/empresa">Empresa</Link>&nbsp;|&nbsp;
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Navbar;