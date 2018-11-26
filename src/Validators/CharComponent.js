import React from 'react';
import './CharComponent.css'
const CharComponent = (props) => {
    return (
    <div className='char'>
        <p onClick={props.click}>{props.char} </p>
    </div>
    )}

export default CharComponent;