import React from 'react';

const Name = ({ts}) => {
    const{id,name} = ts;
console.log(ts);
    return (
        <div>
            <p>{id}</p>
            <p><small>{name}</small></p>
        </div>
    );
};

export default Name;