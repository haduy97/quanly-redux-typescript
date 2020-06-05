import React, { memo, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from "@material-ui/icons/Add";
import '../../assets/css/ListUser.css'
import AddDialog from '../AddUser/AddDialog';
import { connect, useDispatch } from 'react-redux';
import { getUser,openAddUserDialog, inputTextDialog, openDeleteUserDialog, selectedUserDelete, searchByUsername, openUpdateUserDialog, selectedUserUpdate } from '../../redux/action';
import DeleteDialog from '../DeleteUser/DeleteDialog';
import UpdateDialog from '../UpdateUser/UpdateDialog';

const AdminUser = (props: any) => {
    const dispatch = useDispatch();
    const { users, openAdd, openDelete, inputText, selectedDelete, inputSearch, openUpdate, selectedUpdate } = props;

    useEffect(() => {
        dispatch(getUser());
        document.title = "Users list"
    }, [])
    const _onSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(searchByUsername(value));
    }
    const _searchingList = users.filter((_user: any) => {
        const toSearch = _user.username.toLowerCase();
        return toSearch.indexOf(inputSearch.toLowerCase()) + 1;
    })

    return (
        <>
            <title>ContactUs</title>
            <div className="flex-table">
                <h1 className="tittle">Danh sách</h1>
                <TextField
                    type="search"
                    className="searchUser"
                    helperText="Tìm kiếm tên người dùng"
                    label={<SearchIcon />}
                    onChange={_onSearching}
                />
            </div>
            <Fab
                color="primary"
                aria-label="add"
                className="icon-add"
                onClick={() => { dispatch(openAddUserDialog(true)); dispatch(inputTextDialog('')) }}
            >
                <AddIcon />
            </Fab>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>Name</b></TableCell>
                        <TableCell align="center"><b>Password</b></TableCell>
                        <TableCell align="center"><b>Vị trí</b></TableCell>
                        <TableCell align="center"><b>Email</b></TableCell>
                        <TableCell align="center"><b>Chức năng</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_searchingList.map((_user: any) => (
                        <TableRow key={_user}>
                            <TableCell align="center">{_user.username}</TableCell>
                            <TableCell align="center">{_user.password}</TableCell>
                            <TableCell align="center">{_user.role}</TableCell>
                            <TableCell align="center">{_user.email}</TableCell>
                            <TableCell align="center">
                                <IconButton color="primary" onClick={() => {
                                    dispatch(openUpdateUserDialog(true));
                                    dispatch(selectedUserUpdate(_user))
                                }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="secondary" onClick={() => {
                                    dispatch(openDeleteUserDialog(true));
                                    dispatch(selectedUserDelete(_user.username));
                                }} >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AddDialog openAdd={openAdd} inputText={inputText} users={users} />
            <DeleteDialog openDelete={openDelete} selectedDelete={selectedDelete} />
            <UpdateDialog openUpdate={openUpdate} selectedUpdate={selectedUpdate} inputText={selectedUpdate ? selectedUpdate : inputText} />
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersReducer.users,
        openAdd: state.usersReducer.openAdd,
        openDelete: state.usersReducer.openDelete,
        openUpdate: state.usersReducer.openUpdate,
        inputText: state.usersReducer.inputText,
        selectedDelete: state.usersReducer.selectedDelete,
        selectedUpdate: state.usersReducer.selectedUpdate,
        inputSearch: state.usersReducer.inputSearch
    }
}
const connector = connect(mapStateToProps, null);
export default connector(AdminUser)



