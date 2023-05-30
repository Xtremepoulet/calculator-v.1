import React from "react";
import Calculator from "./calculator_design.js";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input_value: ""
      
    }
  }


  number1 = () => {
    this.setState({input_value: this.state.input_value += "1"})
    console.log(this.state.input_value)
  }

  number2 = () => {
    this.setState({input_value: this.state.input_value += "2"})
    console.log(this.state.input_value)
  }
  number3 = () => {
    this.setState({input_value: this.state.input_value += "3"})
    console.log(this.state.input_value)
  }
  number4 = () => {
    this.setState({input_value: this.state.input_value += "4"})
    console.log(this.state.input_value)
  }
  number5 = () => {
    this.setState({input_value: this.state.input_value += "5"})
    console.log(this.state.input_value)
  }
  number6 = () => {
    this.setState({input_value: this.state.input_value += "6"})
    console.log(this.state.input_value)
  }
  number7 = () => {
    this.setState({input_value: this.state.input_value += "7"})
    console.log(this.state.input_value)
  }
  number8 = () => {
    this.setState({input_value: this.state.input_value += "8"})
    console.log(this.state.input_value)
  }
  number9 = () => {
    this.setState({input_value: this.state.input_value += "9"})
    console.log(this.state.input_value)
  }


  C = () => {
    this.setState({input_value: ""})
  }


  Add = () => {
    this.setState({input_value: this.state.input_value += "+"})
  }

  Minus = () => {
    this.setState({input_value: this.state.input_value += "-"})
  }

  Multiply = () => {
    this.setState({input_value: this.state.input_value += "*"})
  }

  Convert_to_Int = () => {
    const x = eval(this.state.input_value);
    this.setState({input_value: x});
    
  }


  dark_mode = () => {
    document.body.classList.toggle("dark_color");

  }




  render(){





    return(

      <div>
        <Calculator nbr1={this.number1} nbr2={this.number2} nbr3={this.number3} nbr4={this.number4} nbr5={this.number5} nbr6={this.number6} nbr7={this.number7} nbr8={this.number8} nbr9={this.number9} value={this.state.input_value} C={this.C} Add={this.Add} equal={this.Convert_to_Int} Minus={this.Minus} Multiply={this.Multiply} dark_mode={this.dark_mode} />
      </div>
    )

  }

}



export default App