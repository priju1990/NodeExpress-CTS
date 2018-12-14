import React from 'react';
import {Switch,Route} from "react-router-dom"
import About from './about';
import Contact from './contact';
import Home from './home';
class Content extends React.Component {
   
    render() { 
        return ( 
            //we can put the contents of this js along with menu.js or it can be separated like this
            <Switch>
            <Route exact path="/" component={Home}> </Route>
            <Route path="/contact" component={Contact} ></Route>
            <Route path="/about" component={About}></Route>

        </Switch>

         );
    }
}
 
export default Content;