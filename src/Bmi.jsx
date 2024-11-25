import React, { useState } from 'react'
import "./Bmi.css"
const Bmi = () => {

    const [height, setheight] = useState("");
    const [weight, setweight] = useState("")
    const [bmivalue, setbmivalue] = useState("")
    const [bmimessage, setbmimessage] = useState('')

    const calculatebmi = () => {
        if (height && weight) {
            const heightinmeter = height / 100;
            const bmi = (weight / (heightinmeter * heightinmeter)).toFixed(2);
            setbmivalue(bmi)

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            }
            else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            }
            else if (calculatebmi >= 25 && calculatebmi < 30) {
                message = 'You are Overweight';
            }
            else {
                message = 'You are Obese';
            }
            setbmimessage(message);
        }
        else {
            setbmivalue('');
            setbmimessage('');
        }
    }



    return (
        <>
            <div className="con">
                <div className="container">
                    <h2>BMI-CALCULATOR</h2>
                </div>
                <div className="contant">
                    <div className="inputs">
                        <label htmlFor='height'>ENTER YOUR HEIGHT (CM) :</label>
                        <input type='number' id='height' value={height} onChange={(e) => setheight(e.target.value)} ></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor='weight'>ENTER YOUR WEIGHT (KG) :</label>
                        <input type='number' id='weight' value={weight} onChange={(e) => setweight(e.target.value)} ></input>
                    </div>
                    </div>
                    <div className="btn">
                        <button className='btns' onClick={calculatebmi}>CALCULATE BMI</button>
                        </div>
                        {bmivalue && bmimessage && (
                            <div className="result">
                                <p className='value'><span className='span-value'>Your BMI:</span> <span className="bmi-value">{bmivalue}</span></p>

                                <p className='message'><span className='span-value'>Result:</span>
                                 <span className="bmi-message">{bmimessage}</span> </p>
                            </div>
                        )}
                   
               
            </div>
        </>
    )
}

export default Bmi
