/**
 * Comando IF THEN com base em condições para
 *  visualizar algumas informações em lugar de outras
 * 
 * É possível usar a forma clássica em javascript mas
 *  também outras formas aqui explicadas:
 *  https://reactjs.org/docs/conditional-rendering.html
 * 
 * Por enquanto uso a clássica.
 */

import {useState} from 'react';

function RenderCondicional(){

    if (1==2) {
    return(
        // Dentro do return, posso colocar um componente
        //  para deixar menos complicado o código
        <div>
            <p>Texto 1</p>
        </div>
    )} else {
    return(
        <div>
            <p>Texto 2</p>
        </div>
    )}
}

export default RenderCondicional;