import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage';
import AuthPage from './Components/AuthPage/AuthPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<AuthPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
