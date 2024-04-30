import React from 'react';

// 7.ChildComponent should:Receive the text passed from ParentComponent as a prop.
function ChildComponent({ text }) {
    return (
        // 8.Display the received text in table
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Received Text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{text}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ChildComponent;