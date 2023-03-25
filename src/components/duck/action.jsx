import { EDIT_STUDENT, REMOVE_STUDENT, SEARCH_STUDENT, SUBMIT_STUDENT } from "./type";

export const actAddStudent = (student) => {
  return {
    type: SUBMIT_STUDENT,
    student,
  };
};

export const actRemoveStudent = (code) => {
  return {
    type: REMOVE_STUDENT,
    code
  }
}

export const actEditStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    student
  }
}

export const actSearchStudent = (student) => {
  return {
    type: SEARCH_STUDENT,
    student
  }
}