export const authProvider = {
    login: ({ username, password }) => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('auth', JSON.stringify({ username }));
        return Promise.resolve();
      }
      return Promise.reject();
    },
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
      localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve(),
};