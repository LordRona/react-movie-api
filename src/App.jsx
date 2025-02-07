import './css/App.css'
import NavBar from './components/navbar'
import Favorites from './pages/Favorites'
import { MovieProvider } from './contexts/MovieContext'
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
