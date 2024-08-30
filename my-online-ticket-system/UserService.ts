// src/services/UserService.ts
import{User} from "../models/User.js";
export class UserService {
    private users: User []= [];
    private currentUser : User | null=null;
    private userIdCounter=1;
    public signUp(username: string, password:string): void {
        const newUser : User = {
            id: this.userIdCounter++,
            username: username,
            password: password,
        };
        this.users.push(newUser);
        this.currentUser = newUser;
        
    }

public login(username:string , password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if(user) {
        this.currentUser = user;
        return true;
    }
    return false;
}
 
public logout(): void{
    this.currentUser = null;
}
public getCurrentUser(): User | null {
    return this.currentUser;
}
}
