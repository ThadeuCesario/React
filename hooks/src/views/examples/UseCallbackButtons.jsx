import React, {memo} from 'react';

const UseCallbackButtons = props => {
    const {inc} = props;
    console.log("Render UseCallbackButtons component");
    return (
        <div>
            <button className="btn" onClick={() => inc(6)}>+6</button>
            <button className="btn" onClick={() => inc(12)}>+12</button>
            <button className="btn" onClick={() => inc(18)}>+18</button>
        </div>
    );
}

export default memo(UseCallbackButtons);