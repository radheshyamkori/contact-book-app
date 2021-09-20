import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            {/* <h1>This is Navbar Component</h1> */}
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" class="navbar-brand">Contact Book</Link>
                    <div>
                        <Link to="/contact/add" className="btn btn-light ml-auto">Create Contact</Link>
                    </div>
                </div>                
            </nav>
        </div>
    );
}
export default Navbar;