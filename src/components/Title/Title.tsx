import React from 'react'
import './Title.css';

type Props = {
    name: string
}

function Title({name}: Props) {
    return (
        <>
            <div className='titleContainer'>
                <h1>{name}</h1>
            </div>
        </>
    )
}

export default Title