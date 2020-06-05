import { GET_USER, NAME_REDUCER, OPEN_ADD, INPUT_DIALOG, ADD_USER, OPEN_DELETE, SELECTED_USER_DEL, DELETE_USER, INPUT_SEARCH, OPEN_UPDATE, SELECTED_USER_UPDATE, UPDATE_USER } from '../types/types';
const api = "http://jsonplaceholder.typicode.com/users";
// export const getUser = (newUser: []) => (dispatch:any) => {
//     return {
//         type: GET_USER,
//         payload: {
//             users: newUser
//         },
//         meta: NAME_REDUCER
//     }
// }


export const getUser = () => (dispatch: any) => {
    const data = fetch(`${api}`)
        .then(res => {
            return res.json();
        }).then(users => {
            dispatch({
                type: GET_USER,
                payload: users,
                meta: NAME_REDUCER
            })
        })
    return data;
}

export const inputTextDialog = (payload: string) => {
    return {
        type: INPUT_DIALOG,
        payload,
        meta: NAME_REDUCER
    }
}

// Add user dialog
export const openAddUserDialog = (payload: boolean) => {
    return {
        type: OPEN_ADD,
        payload,
        meta: NAME_REDUCER
    }
}
export const addUserDialog = (payload: Object) => {
    return {
        type: ADD_USER,
        payload,
        meta: NAME_REDUCER
    }
}

// Delete user dialog
export const openDeleteUserDialog = (payload: boolean) => {
    return {
        type: OPEN_DELETE,
        payload,
        meta: NAME_REDUCER
    }
}
export const selectedUserDelete = (payload: number | null) => {
    return {
        type: SELECTED_USER_DEL,
        payload,
        meta: NAME_REDUCER
    }
}
export const deleteUserDialog = (payload: number) => {
    return {
        type: DELETE_USER,
        payload,
        meta: NAME_REDUCER
    }
}

// Searching user
export const searchByUsername = (payload: string) => {
    return {
        type: INPUT_SEARCH,
        payload,
        meta: NAME_REDUCER
    }
}

// Update user
export const openUpdateUserDialog = (payload: boolean) => {
    return {
        type: OPEN_UPDATE,
        payload,
        meta: NAME_REDUCER
    }
}
export const selectedUserUpdate = (payload: number) => {
    return {
        type: SELECTED_USER_UPDATE,
        payload,
        meta: NAME_REDUCER
    }
}
export const updateUserDialog = (payload: number) => {
    return {
        type: UPDATE_USER,
        payload,
        meta: NAME_REDUCER
    }
}