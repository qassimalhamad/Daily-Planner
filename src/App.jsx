
import './App.css'

function App() {
  
  const dailyPlanner = [
    { name: 'Shower', completed: true },
    { name: 'Study', completed: true },
    { name: 'Exercise', completed: false },
  ];
  const dailyPlannerList = dailyPlanner.map((dayPlan, index) => (
    <li key={index} className={dayPlan.completed ? 'completed' : 'not-completed'}>
      {dayPlan.name}
    </li>
  ))
  return (
    <>
      <h1>Daily Planner</h1>
      {dailyPlannerList}
    </>
  )
}

export default App
