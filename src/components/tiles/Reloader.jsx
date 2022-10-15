import React from 'react'

import TileWrapper from './TileWrapper'

import tilesCss from './tiles.module.css'


const reload = () => window.location.reload()

const Reloader = () => {
    return <TileWrapper title="Reloader">
        <button className={tilesCss.button} onClick={reload}>Reload</button>
    </TileWrapper>
}

export default Reloader
