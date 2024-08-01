export const users = [];
export const signup = async (user) => {
    users.push(user);
};
export const login = async (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    return user || null;
};
