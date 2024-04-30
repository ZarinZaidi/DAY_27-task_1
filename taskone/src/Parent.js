import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    // 5.State to manage the text entered by the user.
    const [text, setText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    // 6.A function to handle the submission of the text.
    const handleSubmit = () => {
        setSubmittedText(text);
    };

    return (
        // 3.ParentComponent should have:An input field where the user can enter text.
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text"
            />
            {/* 4.A button to submit the text. */}
            <button onClick={handleSubmit}>Submit</button>

            {/* 9.Implement the logic to pass the text from ParentComponent to ChildComponent. */}
            <ChildComponent text={submittedText} />
        </div>
    );
}

export default ParentComponent;
