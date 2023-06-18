import React from 'react'

// styles
import './moodle.css'

// components
import RightPanel from '@components/RightPanel/RightPanel'
import Title from '@components/Title/Title'


function Moodle() {
    return (
        <>
            <div>Moodle</div>
            <RightPanel />
            <Title name='MOODLE' />
        </>
    )
}

export default Moodle