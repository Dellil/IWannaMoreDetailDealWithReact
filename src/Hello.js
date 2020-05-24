import React from 'react';

function Hello({ name, color, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            ㅎㅇㅎㅇ {name} 
        </div>
    );
}

export default Hello;