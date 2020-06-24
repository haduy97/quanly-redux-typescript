import * as React from "react";
import addIcon from "../../assets/img/usericon.png";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import {
  inputTextDialog,
  addUserDialog,
} from "../../redux/action";
import {
  _usernameValidate,
  _passwordValidate,
  _emailValidate,
} from "../../services";

interface Props {
  openAdd: boolean;
  inputText: string;
  openAddUserDialog: (open: boolean) => void;
}

export default React.memo(function AddDialog(props: Props) {
  const { openAdd, inputText ,openAddUserDialog} = props;
  const dispatch = useDispatch();

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(
      inputTextDialog({
        ...Object(inputText),
        [name]: value,
      })
    );
  };
  const newInputUser = { ...Object(inputText) };

  const _onAddHandle = (input: any) => {
    if (
      _usernameValidate(input.username) &&
      _passwordValidate(input.password) &&
      _emailValidate(input.email)
    ) {
      dispatch(addUserDialog(input));
      openAddUserDialog(false);
    }
  };

  return (
    <div>
      <Dialog open={openAdd} onClose={() => openAddUserDialog(false)}>
        <DialogTitle className="dialog-title">
          {<img alt={`add-titile`} src={addIcon} />}
          <br />
          {`Tạo người dùng mới`}
        </DialogTitle>
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
              type="password"
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
          <Button
            color="secondary"
            onClick={() => openAddUserDialog(false)}
          >
            quay lại
          </Button>
          <Button
            color="primary"
            onClick={() => _onAddHandle(newInputUser)}
            autoFocus
          >
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
