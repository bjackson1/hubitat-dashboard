import React from 'react'

import tilesCss from './tiles.module.css'

const Boost = () => {
    return (
        <div className={tilesCss.tile}>
            <div className={tilesCss.tileTitle}>Boost</div>
            <div className={`${tilesCss.tileBody}`}>
                <div className={`${tilesCss.buttons} ${tilesCss.arrangeColumn}`}>
                    <div className={`${tilesCss.buttons} ${tilesCss.arrangeRow}`}>
                        <button className={tilesCss.button}>+1</button>
                        <button className={tilesCss.button}>+2</button>
                    </div>
                    <div className={`${tilesCss.buttons} ${tilesCss.arrangeRow}`}>
                        <button className={tilesCss.button}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boost
