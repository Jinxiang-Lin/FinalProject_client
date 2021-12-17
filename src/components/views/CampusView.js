import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus, deleteStudent} = props;
  console.log(campus.students)
  if(campus.students){
    return(
      <div>      
      <h1>Campus: {campus.name}</h1>
      <img src={campus.imageUrl} alt = "campus" height="200" width="200"/>
      <h3>Address: {campus.address}</h3>
      <p>Description: {campus.description}</p>
      {campus.students.map((student => {
        let name = student.firstname + " " + student.lastname;
        return(
        <div key={student.id}>
        <p>Enrolled student: {name}</p>
        <Link to={`/student/${student.id}`}>
        <button>link to {name}</button>
        </Link>
        <button onClick={() => deleteStudent(student.id)}>Delete {name}</button>
        </div>
        )
      }))}
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
      <Link to={`/newstudent`}>
            <button>Add New Student</button>
      </Link>
      
      <Link to={`/campuses`}>
            <button>Campuses</button>
      </Link>
    </div>
    );
  }
  else{
  return (
    <div>
         
      <h1>Campus: {campus.name}</h1>
      <img src={campus.imageUrl} alt = "campus" height="200" width="200"/>
      <h3>Address: {campus.address}</h3>
      <p>Description: {campus.description}</p>
      
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
      <Link to={`/newstudent`}>
            <button>Add New Student</button>
      </Link>
      
      <Link to={`/campuses`}>
            <button>Campuses</button>
      </Link>
    </div>
  );
  }

};

export default CampusView;