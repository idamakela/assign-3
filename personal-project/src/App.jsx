import React, { useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';

function generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

const diceRoll = () => {
    return generateRandomNumber(20, 1);
}

const diceRollResult = (number) => {
    

    return (
        <h2 className='number'>{number}</h2>
    )
}

function App() {

    //If screen in mobile return below, else return "to big screen"
    return (
        <>
            <main>
                <div className="result">
                    {

                        <FaDiceD20 className='dice' />
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
                    <button className='btn' onClick={diceRoll}>roll</button>
                </div>
            </main>
        </>
    )
}

export default App
