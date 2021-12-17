import React, { Component } from "react";
import { connect } from "react-redux";
import {editStudentThunk} from "../../store/thunks"
import EditStudentView from "../views/EditStudentView"
import { Redirect } from 'react-router-dom';
class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          campusId: null,
          email:"",
          gpa:0, 
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
        
        let student = { id: this.props.match.params.id};
        if(this.state.firstname){ student.firstname = this.state.firstname}
        if(this.state.lastname){ student.lastname = this.state.lastname}
        if(this.state.campusId){ student.campusId = this.state.campusId}
        if(this.state.email){ student.email = this.state.email}
        if(this.state.gpa){ student.gpa = this.state.gpa}
        //let updatingStudent = await this.props.fetchStudent(this.props.match.params.id);
       
        let newStudent = await this.props.editStudent(student);
        //console.log(newStudent)
        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null,
          email:"",
          gpa:0,  
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
        return (<Redirect to={`/student/${this.state.redirectId}`}/>)
      }
    return (      
     <EditStudentView 
     handleChange = {this.handleChange} 
     handleSubmit={this.handleSubmit} 
    />
    );
  }
}

const mapDispatch = (dispatch) => {
    console.log("what")
    return({
        editStudent: (student) => {
            console.log("what2")
            return dispatch(editStudentThunk(student))
        },
    })
}

export default connect(null, mapDispatch)(EditStudentContainer);


