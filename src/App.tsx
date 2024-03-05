
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
