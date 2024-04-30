import React, { useState } from 'react'

function ParentComponent() {
    // 5.State to manage the text entered by the user.
    const [name, setName] = useState();

    // 6.A function to handle the submission of the text.
    const handleSubmit = (e) => {
        //prevent the default form submission behavior. to hold the value even after submission
        e.preventDefault();
        //calling the getData fx from the parent comp n pass the 1st var name as arg to hold the data
        // props.getData(name);
    }

    return (
        // 3.ParentComponent should have:An input field where the user can enter text.
        // 4.A button to submit the text.
        <div>
            <h4>ParentComponent</h4>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                <button>Submit</button>
            </form>
        </div>
    )
}
// 9.Implement the logic to pass the text from ParentComponent to ChildComponent.
export default ParentComponent