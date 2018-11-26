import React from 'react';

const ValidationComponent = (props) => {
return (
    <div>
        <p>{props.txtlength}{props.children}</p>
    </div>
)
}

export default ValidationComponent;