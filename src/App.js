import React from 'react';
import './App.css';

import { Firestore } from "./FirebaseConfig";
import { ScenarioList } from './ScenarioList';

function App() {
  const [scenarios, setScenarios] = React.useState()
  const [currentScenarioId, setCurrentScenarioId] = React.useState()

  React.useEffect(() => {
    fetchScenarios(setScenarios)
    subscribeToCurrentScenario(setCurrentScenarioId)
  }, [])
  
  console.log("current scen id", currentScenarioId)
  return (
    <div className="App">
      <ScenarioList scenarioDocs={scenarios} currentScenarioId={currentScenarioId} />
    </div>
  );
}

const fetchScenarios = async (setScenarios) => {
  const scenarioDocs = await Firestore
    .collection('performances')
    .doc("demo")
    .collection("scenarios")
    .orderBy("order")
    .get()
  setScenarios(scenarioDocs)
}

const subscribeToCurrentScenario = async (setCurrentScenarioId) => {
  Firestore
    .collection('performances')
    .doc("demo")
    .onSnapshot((snapshot) => {
      const demo = snapshot.data();
      console.log("got demo", demo)
      setCurrentScenarioId(demo.currentScenario)
		});
}

export default App;
