import React from 'react'

const Button = ({resetArray, bubbleSort}) => {
    const mybuttonStyle = {
        width: "28%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <div id="button-section" style={mybuttonStyle}>
            <button onClick={resetArray}>Generate Array</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button>Insertion Sort</button>
            <button>Quick Sort</button>
        </div>
    )
}

export default Button
