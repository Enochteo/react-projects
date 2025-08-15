import './App.css';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <div className='App'>
      <h1>Itinerary for next week</h1>
      <h2>Schedule of all activities you have planned for next week</h2>
      <Calendar />
    </div>
  )
}

export default App