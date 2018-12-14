import React from 'react';
 import axios from "axios"; 
class UserDetails extends React.Component {
    constructor(props){
        super(props)
		  this.deleteUser=this.deleteUser.bind(this)
    }
	deleteUser(){
		axios.delete("http://localhost:8888/delete/"+this.props.location).then((data)=>{


console.log(data)




})

	}
    state = {  }
    render() { 
        return ( 
            <div>
			
			
                <p>
				{this.props.name}&nbsp;&nbsp;
                {this.props.location}&nbsp;&nbsp; 
                {this.props.year}&nbsp;&nbsp;
				<button onClick={this.deleteUser}> Delete </button>
				</p>
			
            </div>
         );
    }
}
 
export default UserDetails;