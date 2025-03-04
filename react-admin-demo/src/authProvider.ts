import { AuthProvider, Logout } from "react-admin";

export const authProvider: AuthProvider = {
    // 
    login: ({ username, password }) = {
        if(username === 'admin' && password === 'password'){
            localStorage.setItem('username', username);
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    // Runs when log out
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // Runs when API returns error
    checkError: {{ status }: {status: number}} => {
        if(status === 401 || status ===403){
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // Runs when the user navigates to a new ocation to check for auth
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve : Promise.reject();
    }
}