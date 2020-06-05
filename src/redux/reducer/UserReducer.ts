import { GET_USER, OPEN_ADD, INPUT_DIALOG, ADD_USER, OPEN_DELETE, SELECTED_USER_DEL, DELETE_USER, INPUT_SEARCH, OPEN_UPDATE, SELECTED_USER_UPDATE, UPDATE_USER } from '../types/types';
import { UserState } from '../../models/User';

const initialState: UserState = {
  users: [
    {
      username: "thanhnguyen",
      password: "thanh123",
      role: "Manager",
      email: "thanh12@gmail.com"
    },
    {
      username: "buoitran113",
      password: "buoi12",
      role: "Member",
      email: "buoi12@gmail.com"
    },
    {
      username: "lahan22",
      password: "la123",
      role: "Member",
      email: "la12@gmail.com"
    }],
  inputText: "",
  openAdd: false,
  openDelete: false,
  openUpdate: false,
  selectedDelete: null,
  selectedUpdate: null,
  inputSearch: "",
  isLoading: false
}

export const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: [...state.users,...action.payload], isLoading:true
      };
    case INPUT_DIALOG:
      return {
        ...state,
        inputText: action.payload
      }

    // Dialog for add user
    case OPEN_ADD:
      return {
        ...state,
        openAdd: action.payload,isLoading:true
      };
    case ADD_USER:
      const addUser = [...state.users, action.payload]
      return {
        ...state,
        users: addUser
      }

    // Dialog for delete user
    case OPEN_DELETE:
      return {
        ...state,
        openDelete: action.payload
      };
    case SELECTED_USER_DEL:
      return {
        ...state,
        selectedDelete: action.payload
      }
    case DELETE_USER:
      const delUser = state.users.filter((_user: any) => 
        _user.username !== action.payload
      );
      return {
        ...state,
        users: delUser
      }

    // Searching user by username
    case INPUT_SEARCH:
      return {
        ...state,
        inputSearch: action.payload
      }

    // Dialog for update user
    case OPEN_UPDATE:
      return {
        ...state,
        openUpdate: action.payload
      }
    case SELECTED_USER_UPDATE:
      return {
        ...state,
        selectedUpdate: action.payload
      }
    case UPDATE_USER:
      const input:(any) = state.inputText;
      const upUser = state.users.map((_user:any) => {
        if(_user.username === input.username ){
          return {...Object(input)}
        }
        return _user;
      });
      return {
        ...state, users: upUser
      }

    default:
      return state;
  }
};

