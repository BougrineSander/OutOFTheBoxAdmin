import React from 'react'
import './App.css'
import { Firestore } from './FirebaseConfig';

export const Scenario = ({scenario, selected, onSelect}) => {
    const data = scenario.data();
    const [answers, setAnswers] = React.useState()
    React.useEffect(() => {
        fetchAnswers(scenario, setAnswers)
    }, [scenario])
    const className = selected ? 'selected-scenario scenario' : 'scenario'
    return (
        <div onClick={onSelect} className={className}>
            <div>
                <p>Order: {data.order}</p>
                <p>{data.type}</p>
            </div>
            <div>
                {answers && answers.map(renderAnswer)}
            </div>
        </div>
    )
}

const renderAnswer = (answer) => (
    <p>{answer.answer}: {answer.count}</p>
)

const fetchAnswers = (scenario, setAnswers) => {
    const id = scenario.id;
    console.log("scenario", id)
    Firestore
        .collection(`performances/demo/scenarios/${id}/answers`)
        .onSnapshot((snap) => {

            const answers = []
            snap.forEach(doc => {
                answers.push(doc.data())
            })
            setAnswers(answers)
        })
}