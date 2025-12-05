import { useState } from "react";

export default function InputElement() {
    const [text, setText] = useState("");
    function enterName(e) {
        setText(e.target.value);
    }
    return(
        <div style={{ marginTop: "20px" }}>
            <h3>Text Input element content change dynamically:</h3>
            <p>Your Name: {text}</p>
            <label htmlFor="text-content" style={{ marginRight: "15px" }}>Enter Your Name</label>
            <input type="text" id="text-content" onChange={enterName} />
        </div>
    );
}