import React from 'react'

import tilesCss from './tiles.module.css'

const TileWrapper = ({ children, cssStyles = [] }) => (
    <div className={tilesCss.tile}>
        <div className={tilesCss.tileTitle}>Target Temperature</div>
        <div className={`${tilesCss.tileBody} ${cssStyles.join(' ')}`}>
            {children}
        </div>
    </div>
)

export default TileWrapper
