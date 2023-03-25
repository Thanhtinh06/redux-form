import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actEditStudent, actRemoveStudent } from './duck/action';

class Student extends Component {
  render() {
    const {student,onDeleteStudent,onEditedStudent} = this.props
    return (
      <tr>
        <td>{student.code}</td>
        <td>{student.fullName}</td>
        <td>{student.email}</td>
        <td>{student.phone}</td>
        <td>
          <button className='btn edit' onClick={()=>onEditedStudent(student)}><i className="fa-solid fa-pen-to-square"></i></button>        
        </td>
        <td>
          <button className='btn trash' onClick={()=>onDeleteStudent(student.code)}><i className="fa-solid fa-trash"></i></button>    
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteStudent: (code) => {
      dispatch(actRemoveStudent(code));
    },

    onEditedStudent: (student) => {
      dispatch(actEditStudent(student));
    },
  };
};

export default connect(null,mapDispatchToProps)(Student);
