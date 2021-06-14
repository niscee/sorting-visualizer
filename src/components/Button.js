import React from 'react'

const Button = ({resetArray, bubbleSort, setBarFunc}) => {
    const mybuttonStyle = {
        padding: "20px"
    }
    return (
        <>
        <div id="button-section" style={mybuttonStyle}>
            <button onClick={resetArray}>Generate Array</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button>Insertion Sort</button>
            <button>Quick Sort</button>
        </div>
        <div style={{width: "80%", margin: "auto", border: "1px solid white", padding: "20px"}}>
            <form>
                <input type="text" placeholder="Enter number of bars..." style={{padding: "10px", width: "90%"}} onChange={(e)=>{setBarFunc(e.target.value)}}></input>
            </form>
        </div>
        </>
    )
}

export default Button
