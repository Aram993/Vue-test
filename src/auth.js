export default {
    isAuth: false,
    login()  { 
        this.isAuth = true;
        localStorage.setItem('token', 'asdasdasd')
     },
    logout() { this.isAuth = false }
}