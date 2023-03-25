import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSearchStudent } from './duck/action';

class Search extends Component {
  handleOnchange = (event) => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnchange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (keyword) => {
      dispatch(actSearchStudent(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);