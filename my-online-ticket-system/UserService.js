export class UserService {
    users = [];
    currentUser = null;
    userIdCounter = 1;
    signUp(username, password) {
        const newUser = {
            id: this.userIdCounter++,
            username: username,
            password: password,
        };
        this.users.push(newUser);
        this.currentUser = newUser;
    }
    login(username, password) {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (user) {
            this.currentUser = user;
            return true;
        }
        return false;
    }
    logout() {
        this.currentUser = null;
    }
    getCurrentUser() {
        return this.currentUser;
    }
}
