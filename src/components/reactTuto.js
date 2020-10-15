import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'



function ReactTuto() {
    const initItem = { items: ['Hello', 'World', 'Click', 'Me'] }
    const [state, setState] = useState(initItem);
    const props = useSpring({opacity: 1, from: {opacity: 0}})
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
    //jhjkhjk
    //jhjkhj

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
                
                <animated.div style={props}>
                        {
                            items
                        }
                    </animated.div>
            </div>
            <hr />
            
        </div>
    );
}

export default ReactTuto;