import {
  EDIT_STUDENT,
  REMOVE_STUDENT,
  SEARCH_STUDENT,
  SUBMIT_STUDENT,
} from "./type";
const initialState = {
  listStudent: [
    {
      code: 1,
      fullName: "Thanh Tinh",
      email: "thanhtinh@gmail.com",
      phone: "0943165280",
    },
    {
      code: 2,
      fullName: "Ky Duong",
      email: "kyduong@gmail.com",
      phone: "0943165213",
    },
  ],
  editStudent: null,
  keyword: "",
};

export const reducerForm = (state = initialState, action) => {
  switch (action.type) {

    case SUBMIT_STUDENT:
      let listStudentNew = [...state.listStudent];
      const index = listStudentNew.findIndex(
        (student) => student.code === action.student.code
      );
      if (index !== -1) {
        listStudentNew[index] = action.student;
      } else {
        listStudentNew.push(action.student);
      }
      return { ...state, listStudent: listStudentNew };

    case REMOVE_STUDENT:
      let listStudentUpdate = [...state.listStudent];
      let indexRemove = listStudentUpdate.findIndex(
        (student) => student.code === action.code
      );
      if (indexRemove !== -1) {
        listStudentUpdate.splice(indexRemove, 1);
      }
      return { ...state, listStudent: listStudentUpdate };

    case EDIT_STUDENT:
      let editStudentNew = action.student;
      return { ...state, editStudent: editStudentNew };

    case SEARCH_STUDENT:
      let keywordNew = action.payload;
      return { ...state, keyword: keywordNew };
      
    default:
      return { ...state };
  }
};
