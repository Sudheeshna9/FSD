import React ,{useState}from 'react'

const Count = () => {

    const [counter , setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <div>

                <button onClick={() => setCounter(counter-1)}>Decrease</button>
                <button onClick={() => setCounter(0)}>Reset</button>
                <button onClick={() => setCounter(counter+1)}>Increase</button>
            </div>
        </div>

    )
}
export default Count