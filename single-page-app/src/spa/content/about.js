import React from 'react';
import {CSSTransition} from "react-transition-group"
class About extends React.Component {
   
    render() { 
        
        return (  
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="myFadeClass"
            enter={false}
            >
           <div>
                I am At about
            </div>
            </CSSTransition>
        );
    }
}
 
export default About;