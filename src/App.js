import {
  BrowserRouter as Router,

  Routes,

  Route,

  Link
} from "react-router-dom";
import About from "./About";
import Inventory from "./Inventory";
import MPower from "./MPower";
import "./App.css";


function App (){
  return(
    <Router>
    <nav>
        <Link to ="/Inventory" className="link">Inventory</Link>
        <Link to ="/About" className="link"> About Us</Link>
        <Link to ="/MPower" className="link">M Power</Link>
    </nav>

    <Routes>
      <Route path="/Inventory" element={<Inventory/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Mpower" element={<MPower/>}/>
    </Routes>
    </Router>
  
  )

  
}





export default App;
