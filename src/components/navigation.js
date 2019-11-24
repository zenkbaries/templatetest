import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

const Navigation = () => {

    const { user } = useAuth0();

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

// if (loading || !user) {
//     return (
//       <div>Loading...</div>
//     );
// }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">React on Heroku</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {(isAuthenticated && user) &&
                        <a className="nav-link" href="/profile">{user.name}</a>
                        }
                    </li>
                    <li className="nav-item">
                    {!isAuthenticated && (
                        <button
                            className="btn btn-info myButton"
                            onClick={() =>
                                loginWithRedirect({})
                            }>
                            Log in / Sign Up
                        </button>                        
                    )}
                    {isAuthenticated && (
                        <button 
                            className="btn btn-info myButton"
                            onClick={
                                () => logout()
                            }>
                            Log out
                        </button>
                    )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navigation;
