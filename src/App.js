import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 
import About from "./About.js";
import Contact from './Contact.js';
import Dashboard from './Dashboard.js';
import Header from './Header.js';
import Home from './Home.js';
import NoPage from './Nopage.js';
import Style from './style.css';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div>
    	<Router>
    		<Header/>
    		<div className="container py-3">
				<Routes>
		            <Route
		                exact
		                path="/"
		                element={<Home />}></Route>
		               <Route
		                exact
		                path="/about" element={<About />}></Route><Route exact path="/contact" element={<Contact />}
		            ></Route>
		             <Route
		                exact
		                path="/dashboard" element={<Dashboard />} ></Route>
		            </Routes>
		    </div>    
	    </Router>   
	     
        {/*<About/> */}
        { /* <Contact/> */}
        { /* <Users/>*/ }
     </div>
  );
}

export default App;
