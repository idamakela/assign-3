import React, { useState } from 'react';
import { FaDiceD20, FaPlusCircle } from 'react-icons/fa';
import Selector from 'amount-selector.jsx';

function dice(dice, amount) {

}


function App() {

    return (
        <>
            <header>
                <div className="container">
                    <FaDiceD20 className='dice-icon' />
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
                            <div className="dice">
                                <div className="select-title">
                                    <FaDiceD20 className='dice-icon' />
                                    <h3>dice</h3>
                                </div>

                                <div className="select-dice">

                                </div>
                            </div>

                            <div className="amount">
                                <div className="amount-title">
                                    <FaPlusCircle className='plus-icon' />
                                    <h3>amount</h3>
                                </div>

                                <div className="select-amount">
                                    <Selector />
                                </div>
                            </div>
                        </div>
                        <div className="start"><h2>roll</h2></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
