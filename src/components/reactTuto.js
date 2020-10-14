import React, { useState } from 'react';
import styles from "../styles/reactTuto.css";
import { CSSTransitionGroup } from "react-transition-group";



function ReactTuto() {
    const initItem = { items: ['Hello', 'World', 'Click', 'Me'] }
    const [state, setState] = useState(initItem);
    console.log(state.items)
    function handleAdd() {
        let txt = state.items.concat([
            prompt("Enter Text Here")
        ])
        setState({ items: txt })
    }
    function handleRemove(i) {
        let newItem = state.items.slice();
        newItem.splice(i, 1);
        setState({ items: newItem })
    }
    //hjghjg

    const items = state.items.map(
        (object, index) => {
            return (<div key={index} onClick={() => { handleRemove(index) }} >
                {object}
            </div>)
        }
    )

    return (
        <div>
            <div>
                <button onClick={handleAdd}>Add Item</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}
                >
                    <div style={{width:'200px', backgroundColor : 'green' }}>
                        {
                            items
                        }
                    </div>

                </CSSTransitionGroup>
            </div>
            <hr />
            
        </div>
    );
}

export default ReactTuto;