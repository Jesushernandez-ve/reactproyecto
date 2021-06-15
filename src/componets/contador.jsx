import React, { Fragment, useState } from 'react';

const Contador = () => {
    
    const [numero, setnumero] = useState(0)
    const Aumentar = () =>{
        setnumero(numero + 1)
    }
    const Reducir = () =>{
        setnumero(numero - 1)
    }

    
    
    return (
        <Fragment>  
            <h2>cantidad de Contador: {numero} </h2>
            <button onClick={Aumentar} >Aumentar</button>
            <button onClick={Reducir}>Reducir</button>

        </Fragment>
    );
}
export default Contador