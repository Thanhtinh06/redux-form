import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddStudent } from "./duck/action";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      fullName: "",
      email: "",
      phone: "",
    };
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  
  resetForm() {
    this.setState({
      code: "",
      fullName: "",
      email: "",
      phone: "",
    });
  }
  
  handlerSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.editStudent !== prevProps.editStudent) {
      if (this.props.editStudent) {
        this.setState({
          ...this.props.editStudent,
        });
      } else {
        this.setState({
          code: "",
          fullName: "",
          email: "",
          phone: "",
        });
      }
    }
  }
  
  render() {
    return (
      <div className="form container">
        <form className="row g-3" onSubmit={this.handlerSubmit}>
          <div className="col-md-6">
            <label htmlFor="codeStudent" className="form-label">
              Mã số sinh viên
            </label>
            <input
              type="text"
              className="form-control"
              id="codeStudent"
              onChange={this.handleOnchange}
              value={this.state.code}
              name="code"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Họ và tên
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              onChange={this.handleOnchange}
              value={this.state.fullName}
              name="fullName"
            />
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              onChange={this.handleOnchange}
              value={this.state.email}
              name="email"
            />
          </div>
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Số điện thoại
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="0123.."
              onChange={this.handleOnchange}
              value={this.state.phone}
              name="phone"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              {this.props.editStudent ? "Cập nhật học sinh" : "Thêm học sinh"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editStudent : state.reducerForm.editStudent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (student) => {
      dispatch(actAddStudent(student));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
