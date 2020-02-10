import React from 'react'
import './Filler.css'

export default function Filler(props) {
    return (
        <div 
            className="Filler"
            style={
                {
                    width: `${props.percentage}%`,
                    backgroundColor: props.color
                }
            }
        >
        </div>
    )
}
