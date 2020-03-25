import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import useZipCode from '../lib'

function App() {    
    const [value, setZipValue, getZipValue] = useZipCode();   
    const [v, setV] = useState({});
    const handleClick = async() => {
        setV(await getZipValue());        
    }
    return (
        <div>
            <div>
                <input type="text" value={value} onChange={e => setZipValue(e.target.value)}  />
            </div>                        
            <div>Cep: {v.localidade}</div>
            <div>
                <button onClick={handleClick}>Find</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));