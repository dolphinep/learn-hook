import React from 'react';

function Demofx(props) {
    //outMessage = ddd
    const [outMessage, addHello] = React.useState("ddd")

    return (
        <div>
            <h1>{props.msg}</h1>
            <h1>{outMessage}</h1>
            <button onClick={() => addHello(outMessage + "sss")} >Click me!</button>
        </div>
    )
}

export default Demofx;