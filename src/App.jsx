import React, { useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';


function App() {
    const [randomNumber, setRandomNumber] = useState(null);

    const handleClick = (min, max) => {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        setRandomNumber(randomNumber);
    }

    return (
        <>
            <main>
                <div className="result">
                    {randomNumber == null ? 
                        <FaDiceD20 className='dice'/>
                        : 
                        <div className='number'>{randomNumber}</div>
                    }
                </div>
                <div className="container">
                    <div className="text-container">
                        <h1>D20 dice roller</h1>
                        <p>
                            Press the button bellow to roll a D20 dice!
                            This is the start of a bigger application, more functions can come out in the future. 
                        </p>
                    </div>
                    <button className='btn' onClick={() => handleClick(20,1)}>roll</button>
                </div>
            </main>
        </>
    )
}

export default App
