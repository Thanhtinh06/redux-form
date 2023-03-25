import Form from "./Form";
import ListStudent from "./ListStudent";
import Search from "./Search";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home mt-5">
        <h2 className="text-center text-white bg-dark p-2">Thông tin học sinh</h2>
        <div className="addStudent mt-5">
          <Form />
        </div>
        <div className="mt-5">
          <h2 className="mb-5 text-center text-white bg-dark p-2">Danh sách học sinh</h2>
          <div className="mt-5 container">
            <p className="fw-bold mb-0">Tìm kiếm sinh viên</p>
            <Search />
          </div> 
          <ListStudent />
        </div>
      </div>
    );
  }
}

export default Home;
