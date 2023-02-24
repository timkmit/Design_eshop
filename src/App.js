import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavigationBar from './components/Navibar'
import Home from './components/Home.js'
import Users from './components/Users.js'
import About from './components/About.js'

function App() {
  return (
    <>
    <Router>
        <NavigationBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
