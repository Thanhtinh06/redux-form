import Student from "./Student";
import React, { Component } from "react";
import { connect } from "react-redux";

class ListStudent extends Component {
  renderListStudent() {
    let { listStudent, keyword } = this.props;
    listStudent = listStudent.filter((student) => {
      return (
        student.fullName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    });
    return listStudent.map((student) => {
      return <Student key={student.code} student={student} />;
    });
  }
  render() {
    if(this.props.listStudent.length > 0){
      return (
        <table className="table table-striped text-center container">
          <thead className="table-dark">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderListStudent()}</tbody>
        </table>
      );
    } else {
      return <p className="text-center mt-5">Chưa có học sinh trong danh sách</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listStudent: state.reducerForm.listStudent,
    keyword: state.reducerForm.keyword || "",
  };
};

export default connect(mapStateToProps, null)(ListStudent);
