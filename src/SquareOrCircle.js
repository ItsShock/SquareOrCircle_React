import React from 'react';

const mySquare = {
    width: "200px",
    height: "200px"
};

const myCircle =
{
    width: "200px",
    height: "200px",
    borderRadius: "50%"
}

function App({isCircle}) {
    return <div style={mySquare}></div>
    
}

export default App;
