import * as React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from "@material-ui/core/TextField";
import updateIcon from '../../assets/img/updateicon.png';
import { openUpdateUserDialog, inputTextDialog, updateUserDialog } from '../../redux/action/actions';
import { _passwordValidate,_emailValidate, _usernameValidate } from '../../services';

interface Props {
    openUpdate: boolean;
    inputText: string;
    selectedUpdate: number;
}

const UpdateDialog: React.FunctionComponent<Props> = (props) => {
    const { openUpdate,inputText,selectedUpdate} = props;
    const dispatch = useDispatch();

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(inputTextDialog({
            ...Object(inputText),
            [name]:value
        }));
    }
    const inputCheck:(any) = inputText;
    // const _onUpdateHandle = (input: any, select: number) => {
    //     if (_usernameValidate(input.username) && _passwordValidate(input.password) && _emailValidate(input.email)) {            
    //         dispatch(updateUserDialog(select));
    //         dispatch(openUpdateUserDialog(false));
    //     }
    // }

    return (
        <>
            <Dialog
                open={openUpdate}
                onClose={() => dispatch(openUpdateUserDialog(false))}
            >
                <DialogTitle className='dialog-title' >{<img src={updateIcon} />}<br />{`Cập nhật thông tin`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            type="text"
                            label="Name"
                            name="username"
                            defaultValue={inputCheck.username}
                            onChange={_onChange}
                            disabled
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Password"
                            name="password"
                            defaultValue={inputCheck.password}
                            onChange={_onChange}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Role"
                            // helperText="Hãy chọn vị trí"
                            className="select-role"
                            name="role"
                            defaultValue={inputCheck.role}
                            onChange={_onChange}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Email"
                            name="email"
                            defaultValue={inputCheck.email}
                            onChange={_onChange}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(openUpdateUserDialog(false))} >
                        quay lại
                    </Button>
                    <Button color="primary" onClick={() =>{
                         dispatch(updateUserDialog(selectedUpdate));
                         dispatch(openUpdateUserDialog(false));
                    }} autoFocus>
                        cập nhật
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UpdateDialog;
