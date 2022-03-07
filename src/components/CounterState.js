/**
 * Contador usando State
 */

import {useState} from 'react';

function CounterState({startFrom}){

    if (startFrom == null) {startFrom = 0};
    const [num, setNum] = useState(startFrom);

    function numMais() {
        setNum(num +1);
    }

    function numMenos() {
        setNum(num -1);
    }

    function numReset() {
        setNum(startFrom);
    }

    return(
        <div>
            <button onClick={numMenos}>&nbsp;-&nbsp;</button>
            &nbsp;&nbsp;{num}&nbsp;&nbsp;
            <button onClick={numMais}>&nbsp;+&nbsp;</button>&nbsp;
            <button onClick={numReset}>&nbsp;Reset&nbsp;</button>
        </div>
    )
}

export default CounterState;