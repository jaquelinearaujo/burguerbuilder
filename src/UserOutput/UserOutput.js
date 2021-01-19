import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Username: {props.userName}</p>
            <p>Some random text!</p>
        </div>
    );
};

export default userOutput;