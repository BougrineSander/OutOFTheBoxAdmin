import React from 'react'
import { Scenario } from './Scenario'
import { Firestore } from './FirebaseConfig'

export const ScenarioList = ({scenarioDocs, currentScenarioId}) => {
    console.log("current id", currentScenarioId)
    const scenarios = []
    if(scenarioDocs) scenarioDocs.forEach(doc => scenarios.push(doc))
    return (
        <div>
            {scenarios && scenarios.map((scenario) => renderScenario(scenario, currentScenarioId))}
        </div>
    )
}

const renderScenario = (scenario, currentId) => (
    <Scenario selected={currentId == scenario.id} scenario={scenario} onSelect={() => setScenario(scenario.id)}/>
)

const setScenario = (id) => {
    Firestore.collection("performances").doc("demo").set({
        currentScenario: id,
    }, {merge: true})
    
}