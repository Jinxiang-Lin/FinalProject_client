import React, { Component } from "react";
import { connect } from "react-redux";
import {editCampusThunk} from "../../store/thunks"
import EditCampusView from "../views/EditCampusView"
import { Redirect } from 'react-router-dom';
class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          address: "", 
          description: "",
          
          redirect: false, 
          redirectId: null
        };
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    handleSubmit = async event => {
        event.preventDefault();
        
        let campus = { id: this.props.match.params.id,
                      
        };
        if(this.state.name){ campus.name = this.state.name}
        if(this.state.address){campus.address = this.state.address}
        if(this.state.description){campus.description = this.state.description}
        
        //let updatingStudent = await this.props.fetchStudent(this.props.match.params.id);
       console.log(campus)
        let newCampus = await this.props.editCampus(campus);
        
        this.setState({
          name: "", 
          address: "", 
          description:"",
          
          redirect: true, 
          redirectId: this.props.match.params.id
        });
    }
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
  render() {
    //get id from current url
    if(this.state.redirect) {
        return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
      }
    return (      
     <EditCampusView 
     handleChange = {this.handleChange} 
     handleSubmit={this.handleSubmit} 
    />
    );
  }
}

const mapDispatch = (dispatch) => {
   
    return({
        editCampus: (campus) => { return dispatch(editCampusThunk(campus))},
    })
}

export default connect(null, mapDispatch)(EditCampusContainer);


