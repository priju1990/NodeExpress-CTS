import React from 'react';
import ReactDOM from 'react-dom';
import App from './rootComponent/app';
import {HashRouter} from 'react-router-dom';
import './style.css'; 


//hashrouter helps to maintain a basic webapp..like backbutton..cookie management etc

ReactDOM.render(<HashRouter>
                <App></App>
                </HashRouter>, document.getElementById('root'))

