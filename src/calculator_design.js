import React from "react";
import "./design.css"


const Calculator = ({ nbr1, nbr2, nbr3, nbr4, nbr5, nbr6, nbr7, nbr8, nbr9, value, C, Add, equal, Minus, Multiply, dark_mode}) => {

    return(
        <div>
            

            <div  className="container">
                <input className="input_field" value={value}></input>
                <button className="C_class" onClick={C}>C</button>
                <button className="btn_nbr" onClick={nbr1}>1</button>
                <button className="btn_nbr" onClick={nbr2}>2</button>
                <button className="btn_nbr" onClick={nbr3}>3</button>
                <button className="btn_nbr operator_btn" onClick={Add}>+</button>
                <button className="btn_nbr" onClick={nbr4}>4</button>
                <button className="btn_nbr" onClick={nbr5}>5</button>
                <button className="btn_nbr operator_btn" onClick={Minus}>-</button>
                <button className="btn_nbr" onClick={nbr6}>6</button>
                <button className="btn_nbr" onClick={nbr7}>7</button>
                <button className="btn_nbr operator_btn" onClick={Multiply}>x</button>
                <button className="btn_nbr" onClick={nbr8}>8</button>
                <button className="btn_nbr" onClick={nbr9}>9</button>
                <button className="btn_nbr equal_btn" onClick={equal}>=</button>

                <div className="color_mode">
                    <button onClick={dark_mode}>🌙🌞</button>
                </div>
                
            
            </div>
        </div>




    )
}


export default Calculator