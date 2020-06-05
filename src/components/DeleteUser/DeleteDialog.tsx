import * as React from 'react';
import deleteIcon from '../../assets/img/delete-icon.png';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openDeleteUserDialog, deleteUserDialog } from '../../redux/action/actions';

interface Props {
    openDelete: boolean;
    selectedDelete: number;
}

const DeleteDialog: React.FunctionComponent<Props> = (props) => {
    const { openDelete,selectedDelete } = props;
    const dispatch = useDispatch();

    return (
        <div>
            <Dialog
                open={openDelete}
                onClose={() => dispatch(openDeleteUserDialog(false))}
            >
                <DialogContent>
                    <DialogContentText className='dialog-title' >
                        {<img src={deleteIcon} />}<br />
                        <b>Xóa người dùng này ? </b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(openDeleteUserDialog(false))} >
                        quay lại
                    </Button>
                    <Button color="primary" onClick={() => {
                        dispatch(deleteUserDialog(selectedDelete));
                        dispatch(openDeleteUserDialog(false));
                    } } autoFocus>
                        xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
};

export default DeleteDialog;
