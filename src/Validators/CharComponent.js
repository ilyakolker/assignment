import React from 'react';
import './CharComponent.css'
const CharComponent = (props) => {
    return (
    <div className='char' onClick={props.click}>
    
        <p >{props.char} </p>
    </div>
    )}

export default CharComponent;