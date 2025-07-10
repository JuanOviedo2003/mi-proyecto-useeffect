import './App.css'
import FetchApi from './components/FetchApi'
import CountdownTimer from './components/CountdownTimer'
import DinamicTitle from './components/DinamicTitle'
import EventListenerCustom from './components/EventListenerCustom'

function App() {

  return (
    <div className="min-h-screen md:h-screen grid grid-cols-1 grid-rows-4 gap-1 bg-black w-screen
      sm:grid-cols-5 sm:grid-rows-6 p-1">
      <FetchApi />
      <DinamicTitle />
      <CountdownTimer />
      <EventListenerCustom />
    </div>
  )
}

export default App
