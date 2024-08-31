import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
      <NavBar></NavBar>

      {/* <DaisyNav></DaisyNav> */}

      <PriceOptions></PriceOptions>

      <h1 className='text-7xl bg-orange-500'>Vite + React</h1>

    </>
  )
}

export default App
