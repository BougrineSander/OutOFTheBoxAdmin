import React from 'react'

export const Scenario = ({scenario, selected, onSelect}) => {
    const data = scenario.data();
    return (
        <div onClick={onSelect}>
            {selected && <p>Currently:</p>}
            <div>
                <p>Order: {data.order}</p>
                <p>{data.type}</p>
            </div>
        </div>
    )
}
