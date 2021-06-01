import React from 'react';

const mySquare = {
    width: "200px",
    height: "200px",
    backgroundColor: "#000",
};

const myCircle =
{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#000",
};

function SquareOrCircle({isCircle}) {
    return <div style={isCircle ? myCircle : mySquare}></div>
    
}

export default SquareOrCircle;
