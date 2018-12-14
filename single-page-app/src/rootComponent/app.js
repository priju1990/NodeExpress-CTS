import React from 'react';
import Menu from '../spa/menu/menu';
import Content from '../spa/content/content';
class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div >
                 <div>  <Menu></Menu></div>
                 <div className="content">  <Content></Content> </div>
            </div>
         );
    }
}
 
export default App;