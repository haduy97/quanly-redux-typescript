export const _usernameValidate = (username:string) => {
    const MIN_LENGTH = 4;
    const MAX_LENGTH = 16;
    if (!username) {
        window.alert("Tên không được để trống");
        return false;

    }
    const usernameLength = username.length;
    if (usernameLength <= MIN_LENGTH || usernameLength > MAX_LENGTH) {
        window.alert("Tên phải từ 4 đến 15 kí tự !!");
        return false;
    }
    return true;
};
export const _passwordValidate = (password:string) => {
    const MIN_LENGTH = 6;
    if (!password) {
        window.alert("Mật khẩu không được để trống");
        return false;
    }
    const passwordLength = password.length;
    if (passwordLength < MIN_LENGTH) {
        window.alert("Mật khẩu ít nhất là 6 kí tự");
        return false;
    }
    return true;
}
export const _emailValidate = (email:string) => {
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checking = checkEmail.exec(email);
    if (checking === null) {
        window.alert("Email không hợp lệ!! VD: example@gmail.com");
        return false;
    }
    return true;
}