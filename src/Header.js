import { Link } from "react-router-dom";

function Header(){
	return(
		<div className="container border-bottom">
	  		<header className="d-flex justify-content-center py-3">
			    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                     <span className="fs-4">React App</span>
                </Link>
			    <ul className="nav nav-pills">
			        <li className="nav-item">
			        	<Link to="/" className="nav-link active">
                                Home
                       </Link>
			        </li>
			        <li className="nav-item">
			        	<Link to="/about" className="nav-link">
                                About Us
                       </Link>
			        </li>
			        <li className="nav-item">
			        	<Link to="/dashboard" className="nav-link">
                                Dashboard
                       </Link>
			        </li>
			        <li className="nav-item">
			        	<Link to="/contact" className="nav-link">
                                Contact Us
                       </Link>
                    </li>
			    </ul>
		    </header>
	  	</div>
	)

}
export default Header;