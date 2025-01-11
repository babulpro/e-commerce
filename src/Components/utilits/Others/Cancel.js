import React from 'react';

const Cancel = ({id}) => {
    console.log(id)

    return (
        <div>
            <button onClick={alert(id)}>Cancel</button>
        </div>
    );
};

export default Cancel;