import React from 'react'
import Filler from './Filler';
import './ProgressBar.css'

export default function ProgressBar(props) {
    return (
        <div className="ProgressBar">
            <Filler percentage={props.percentage} color={props.color} />
        </div>
    )
}
