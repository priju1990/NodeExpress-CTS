import React from 'react';
import axios from 'axios';
import {CSSTransition} from "react-transition-group"
import UserDetails from './userDetails';
//DONT FORGET npm install cors
class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state={user: {name:"",location:"",year:""},submitStatus:"",userdetails:[]}
        this.userSubmitted =this.userSubmitted.bind(this)
        this.captureInputName =this.captureInputName.bind(this)
        this.captureInputLocation =this.captureInputLocation.bind(this)
        this.captureInputYear =this.captureInputYear.bind(this)
        this.getUserDetails=this.getUserDetails.bind(this)
    }
    userSubmitted(){
        console.log("Form submitted")
        console.log(this.state.user)
        axios.post("http://localhost:8888/add",this.state.user).
        then((response)=>{
            console.log(response.data)
           // this.setState({submitStatus:data})
        })
    }
    captureInputName(e){

        var val = e.target.value
        this.setState(prevState => ({
            user:{
              ...prevState.user,
              name: val
            }
          }));

       // this.setState({user:{name:e.target.value}})
        console.log("input")
        console.log(this.state.user)
    }

    captureInputLocation(e){
      //  this.setState({user:{location:e.target.value}})
      var val = e.target.value
        this.setState(prevState => ({
            user:{
              ...prevState.user,
              location: val
            }
          }));
        console.log(this.state.user)
     //   console.log(e.target.value)
    }

    captureInputYear(e){
        var val = e.target.value
        this.setState(prevState => ({
            user:{
              ...prevState.user,
              year: val
            }
          }));
     //   this.setState({user:{year:e.target.value}})
        console.log(this.state.user)
    //    console.log(e.target.value)
    }
    getUserDetails(){

        axios.get("http://localhost:8888/get").
        then((response)=> {
            this.setState({userdetails: response.data})
            
        
          console.log(response.data)
        })
      
    }
   
    render() { 
        const userlist = this.state.userdetails.map((user)=>{
           return( <UserDetails name={user.name} location={user.location} year={user.year}></UserDetails>)
        })
        return (  
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="myFadeClass"
            enter={false}
          >
                <div>
                    Im contact details
              <div>

                        <form onSubmit={this.userSubmitted}>
                            Name <input type="text" onChange={this.captureInputName}></input> <br></br>
                            Location <input type="text" onChange={this.captureInputLocation}></input> <br></br>
                            Year <input type="number" onChange={this.captureInputYear}></input><br></br>
                            <br></br>
                            <input type="submit" value="Submit" ></input>
                        </form>
                    </div>

                    <div>
                        <button value="Get Details of all users" onClick={this.getUserDetails}>Get Details of all users</button>
                      
                    {userlist}
                    </div>
                </div>
          </CSSTransition>
        );

       
    }
}
 
export default Contact;