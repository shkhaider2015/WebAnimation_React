import React from 'react'
import {useTransition, animated} from 'react-spring'





function FirstAnimation() {

    const transitions = useTransition({
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        })


    return (
        <div>

                <animated.div
                style = {transitions}
                >
                    <p>jjakjhakhkaha</p>
                </animated.div>
        </div>
    )
}


export default FirstAnimation;