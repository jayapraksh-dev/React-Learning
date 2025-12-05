import { useState } from "react";

export default function BasicCounter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h3>Basic Counter Example Using State:</h3>
            <p>Counter: {count}</p>
            <button className="basicCounterBtn" onClick={() => setCount(count+1)}>Increase Count</button>
            <button className="basicCounterBtn" onClick={() => setCount(count-1)}>Decrease Count</button>
            <button className="basicCounterBtn" onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
}