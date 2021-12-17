import { Link } from "react-router-dom";

const StudentView = (props) => {
  
  const { student } = props;
  
  let campusName = "";
  if(student.campus){ campusName = student.campus.name; }
  else{ campusName = "Student has not enrolled"; }
  return (
    <div>
      <h1>Name: {student.firstname + " " + student.lastname}</h1>
      <h3>Email: {student.email}</h3>
      <img src={student.imageUrl} alt = "student" height="200" width="200"/>
      <h3>GPA: {student.gpa}</h3>
      <h3>Campus: {campusName}</h3>
      
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/students`}>
        <button>All Students</button>
      </Link>
  {student.campus? <Link to={`/campus/${student.campus.id}`}><button>Link to {campusName}</button></Link> : ""}
    </div>
  );

};

export default StudentView;