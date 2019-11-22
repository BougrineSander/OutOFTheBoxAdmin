import React from 'react'
import './App.css'

export const Scenario = ({scenario, selected, onSelect}) => {
    const data = scenario.data();
    const className = selected ? 'selected-scenario scenario' : 'scenario'
    return (
        <div onClick={onSelect} className={className}>
            <div>
                <p>Order: {data.order}</p>
                <p>{data.type}</p>
            </div>
        </div>
    )
}
