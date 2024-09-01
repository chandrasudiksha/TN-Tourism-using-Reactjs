import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route,Routes,Navigate} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Aboutus from './Aboutus/Aboutus';
import Hills from './Tour/Hills';
import Beach from './Tour/Beach'
import Temples from './Tour/Temples'
import Contact from './Contact/Contact';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Temples" element={<Temples/>}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Hills" element={<Hills/>}/>
      <Route path="/Beach" element={<Beach/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
