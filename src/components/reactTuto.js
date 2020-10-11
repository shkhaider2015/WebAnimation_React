import React, { useState } from 'react';
import ReactCSSTransitionGroup from "react-transition-group";




function ReactTuto() {
    const initItem = { items : ['Hello', 'World', 'Click', 'Me'] }
    const [state, setState] = useState([initItem]);
    console.log(state)
    function handleAdd()
    {
        let txt = prompt('Enter Some Text');
        setState({items : txt})
    }
    function handleRemove(i)
    {
       let newItem = state.items.slice();
       newItem.splice(i, 1);
       setState({items : newItem})
    }
    
    
    return (
        <div>
            {
                state.items.map(
                    (object, index) => 
                    {
                        return (<div key={index} onClick={()=> {handleRemove(index)}} >
                             {object}
                             </div>)
                    }
                )
            }
            <div>
                <button onClick={handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                transitionName="Example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                >
                    {state.items}
                </ReactCSSTransitionGroup>
            </div>
        </div>
    );
}

export default ReactTuto;