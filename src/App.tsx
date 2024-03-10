
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import NavBar from './components/NavBar';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <Analytics/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
