import React, { useState, useEffect, useRef  } from 'react';
import randomColor from "randomcolor";

const Playground = () => {
    const [count, setCount] = useState(0);

    const [color, setColor] = useState(null);
    useEffect(() => {
        setColor(randomColor())
    }, [count])
    const inputRef = useRef()

    return (
        <div style={{ borderTop: `10px solid ${color}` }}>
            {count}
            <button onClick={() => setCount(currentCount => currentCount - 1)}>
                -
            </button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                +
            </button>
            <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />

        </div>
    )
}

export default Playground;