import React from 'react'

function Print({array}) {
    return (
        <div>
            {array.map((value, index)=>(
                    <div key={index} className='array-bar' style={{height:`${value}px`}}></div>
                ))
            }
        </div>
    )
}

export default Print
