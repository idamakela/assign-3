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
                        <p>
                            Press the button bellow to roll a D20 dice!
                            This is the start of a bigger application, more functions can come out in the future. 
                        </p>
                    </div>
                    <button className='btn'>roll</button>
                </div>
            </main>
        </>
    )
}

export default App
