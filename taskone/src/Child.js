import React from 'react'

// 7.ChildComponent should:Receive the text passed from ParentComponent as a prop.
function ChildComponent(props) {
    const [name, setName] = useState();

    //calling the getData fx from the parent comp n pass the 1st var name as arg to hold the data
    props.getData(name);

    return (
        // 8.Display the received text in table
        <div>
            <h4>ChildComponent</h4>
            <table>
                <tr>
                    <th></th>
                </tr>
                {
                    name.map((used) => (
                        <tr>
                            <td>{used.id}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
// 9.Implement the logic to pass the text from ParentComponent to ChildComponent.
export default ChildComponent