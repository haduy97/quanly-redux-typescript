import * as React from 'react';
import addIcon from '../../assets/img/usericon.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from "@material-ui/core/TextField";
import { useDispatch } from 'react-redux';
import { openAddUserDialog, inputTextDialog, addUserDialog } from '../../redux/action';
import { _usernameValidate,_passwordValidate,_emailValidate } from '../../services';

interface Props {
    openAdd: boolean;
    inputText: string;
    users: any[];
}

const AddDialog: React.FunctionComponent<Props> = (props) => {
    const { openAdd, inputText, users } = props;
    const dispatch = useDispatch();

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(inputTextDialog({
            ...Object(inputText),
            [name]: value
        }));
    }
    const newInputUser = { ...Object(inputText) };

    const _onAddHandle = (input: any) => {
        if (_usernameValidate(input.username) && _passwordValidate(input.password) && _emailValidate(input.email)) {
            dispatch(addUserDialog(input));
            dispatch(openAddUserDialog(false));
        }
    }

    return (
        <div>
            <Dialog
                open={openAdd}
                onClose={() => dispatch(openAddUserDialog(false))}
            >
                <DialogTitle className='dialog-title' >{<img src={addIcon} />}<br />{`Tạo người dùng mới`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            type="text"
                            label="Name"
                            name="username"
                            onChange={_onChange}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Password"
                            name="password"
                            onChange={_onChange}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Role"
                            helperText="Hãy chọn vị trí"
                            className="select-role"
                            name="role"
                            onChange={_onChange}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Email"
                            name="email"
                            onChange={_onChange}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(openAddUserDialog(false))} >
                        quay lại
                    </Button>
                    <Button color="primary" onClick={() => _onAddHandle(newInputUser)} autoFocus>
                        Tạo
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
};

export default AddDialog;
