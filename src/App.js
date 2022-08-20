import logo from './logo.svg';
import './App.css';
import UserRoutes from "./UserRoutes"
import AdminRoutes from "./AdminRoutes"
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from './screens/Home';
import { useSelector } from 'react-redux'

function App() {
  
  const auth = useSelector(state => state.auth)

  console.log("BASE_URL from .env file", process.env.REACT_APP_BASE_URL);

  console.log("Store auth lng value", auth.lng);
  return (
    <div className="App">
      <Router>
       
        <Routes>

          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
