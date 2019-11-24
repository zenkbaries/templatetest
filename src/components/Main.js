import React, { Fragment } from 'react';

import react_logo from './react_logo.svg';
import heroku_logo from './heroku_logo.svg';


function Main() {

    return (

        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <img src={react_logo} className="App-logo-react" alt="React logo" />
                </div>
                <div className="col-md-6">
                    <img src={heroku_logo} className="App-logo-heroku" alt="Heroku logo" />
                </div>
            </div>
            <p>
            Running React on Heroku made easy.
            </p>
            -
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            -
            <a
            className="App-link"
            href="https://www.heroku.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Heroku Platform
            </a>
        </Fragment>
    )
}

export default Main;
