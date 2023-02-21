import React, { useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';

function dice(dice, amount) {
    
}


function App() {

    //If screen in mobile return below, else return "to big screen"
    return (
        <>
            <main>
                <div className="result">
                    <FaDiceD20 className='dice' />
                </div>
                <div className="container">
                    <div className="text-container">
                        <h1>D20 dice roller</h1>
                        <p>some text about it</p>
                    </div>
                    <button className='btn'>roll</button>
                </div>
            </main>
        </>
    )
}

export default App
