import { GET_USER, NAME_REDUCER, OPEN_ADD, INPUT_DIALOG, ADD_USER, OPEN_DELETE, SELECTED_USER_DEL, DELETE_USER, INPUT_SEARCH, OPEN_UPDATE, SELECTED_USER_UPDATE, UPDATE_USER, GET_USER_SUCCESS } from '../types/types';
import { action } from "typesafe-actions";

export const getUser = () => action(GET_USER, {isLoading: true},NAME_REDUCER);
export const getUserSuccess = (listUsers: []) => action(GET_USER_SUCCESS, {isLoading: false,users: listUsers},NAME_REDUCER);
export const inputTextDialog = (input:string) => action(INPUT_DIALOG,{inputText: input},NAME_REDUCER);

// Add user dialog
// export const functionName = (params) =>(dispatch,getState)=> {
//     const {users}= get(getState(),"resource.core",{})
// }
export const openAddUserDialog = (open: boolean) => action(OPEN_ADD,{openAdd: open}, NAME_REDUCER);
export const addUserDialog = (newUser: Object) => action(ADD_USER, newUser,NAME_REDUCER);

// Delete user dialog
export const openDeleteUserDialog = (open: boolean) => action(OPEN_DELETE,{openDelete: open},NAME_REDUCER);
export const selectedUserDelete = (select: number | null) => action(SELECTED_USER_DEL,{selectedDelete: select},NAME_REDUCER );
export const deleteUserDialog = (deleteUser: number) => action(DELETE_USER, deleteUser,NAME_REDUCER);

// Searching user
export const searchByUsername = (input: string) => action(INPUT_SEARCH,{inputSearch: input},NAME_REDUCER);

// Update user
export const openUpdateUserDialog = (open: boolean) => action(OPEN_UPDATE, {openUpdate: open},NAME_REDUCER);
export const selectedUserUpdate = (select: number) => action(SELECTED_USER_UPDATE, {selectedUpdate: select}, NAME_REDUCER);
export const updateUserDialog = (updateUser: number) => action(UPDATE_USER, updateUser, NAME_REDUCER);