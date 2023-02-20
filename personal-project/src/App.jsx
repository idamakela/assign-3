import React, { useState } from 'react';
import { FaDiceD20 } from 'react-icons/fa';

function dice() {

}

function App() {

    return (
        <>
            <header>
                <div className="container">
                    <FaDiceD20 className='dice' />
                    <h1>D20</h1>
                </div>
            </header>
            <main>
                <div className='container one'>
                    <div className="result">
                        <h2 className='output'>20</h2>
                        <h2>result</h2>
                    </div>
                </div>

                <div className='container two'>
                    <div className="select">
                        <h2>Select</h2>
                        <div className="container">
                            <div className="dice"><h3>dice</h3></div>
                            <div className="amount"><h3>amount</h3></div>
                        </div>
                        <div className="start"><h2>start</h2></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
