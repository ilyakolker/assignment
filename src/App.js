import React, { Component } from 'react';
import './App.css';
import  ValidationComponent from './Validators/ValidationComponent';
import CharComponent from './Validators/CharComponent';

let inputtxt = '';
class App extends Component {
state ={
  input : "",
  inputLength : 0,
  charsArry: []
}

inputHandler = (e) =>{
  inputtxt = e.target.value;
  const chars = [...this.state.charsArry];
  const p = {
    id: (inputtxt.length -1),
    char : inputtxt[inputtxt.length -1]
  };
  
  if(inputtxt.length > this.state.charsArry.length){
    chars.push(p);
  }
  else{
     chars.splice(0,chars.length);
    for (let i = 0; i < inputtxt.length-1; i++) {
      chars[i] = {
        id : i,
        char: inputtxt[i]
      } 
     chars.push(p); 
    }
  }
  this.setState({
    input : inputtxt,
    inputLength : inputtxt.length,
    charsArry : chars
  })
  
}

deleteCharHandler = (charIndex) =>{
  let res = '';
  document.getElementById('in').value = inputtxt.slice(charIndex,1);
  const chars = [...this.state.charsArry];
  chars.splice(charIndex,1);
  for (let i = 0; i < chars.length; i++) {
    res += chars[i].char;
  }
  document.getElementById('in').value = res;
  this.setState({
    input : res,
    inputLength : res.length,
    charsArry: chars
  });
  }

  render() {

    let chars = null;

    chars = (
      <div>
        {
          this.state.charsArry.map((c,index) => {
            return <CharComponent char={c.char} key={c[index]} click={ () => this.deleteCharHandler(index)} />
          })
           
        }
      </div>
    )

    return (
      <div className="App">
      <input id="in" type='text' onChange={(event) => this.inputHandler(event)} />
      <p>{this.state.input}</p>
      <ValidationComponent>{this.state.inputLength >= 5 ? 'Long enough' : "Too short" }</ValidationComponent>
      {chars}
      </div>
    );
  }
}

export default App;
