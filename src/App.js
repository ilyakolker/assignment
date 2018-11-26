import React, { Component } from 'react';
import './App.css';
import  ValidationComponent from './Validators/ValidationComponent';
import CharComponent from './Validators/CharComponent';
const chars = [];
let inputtxt = '';
class App extends Component {
state ={
  input : "",
  inputLength : 0,
  charsArry: []
}

inputHandler = (e) =>{
  inputtxt = e.target.value;
  const p = {
    id: inputtxt.length -1,
    char : inputtxt[inputtxt.length -1]
  };
  
  if(inputtxt.length > this.state.charsArry.length){
   
    chars.push(p);
    
    
  }
  else{
    chars.splice(this.state.charsArry[p.id-1],1);
   
  }
  this.setState({
    input : inputtxt,
    inputLength : inputtxt.length,
    charsArry : chars
  })
  console.log(this.state.charsArry)
}

deleteCharHandler = (charIndex) =>{
  const chars = [...this.state.charsArry];
  //document.getElementById('in').value = inputtxt;
  chars.splice(charIndex,1);
  this.setState({
    input : inputtxt,
    inputLength : inputtxt.length,
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
      <p>{this.state.inputLength}</p>
      <ValidationComponent>{this.state.inputLength >= 5 ? 'Long enough' : "Too short" }</ValidationComponent>
      {chars}
      {console.log(this.state)}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph). <strong> V</strong></li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop<strong> V</strong></li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)<strong> V</strong></li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
