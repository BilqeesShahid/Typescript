export type User= {
    name: string;
    email:string;
    password:string;
};

export const users:User[]=[];

export const signup = async (user :User): Promise<void> => {
    users.push(user);
};

export const login = async (email: string,password:string): Promise<User | null> => {
    const user = users.find(u => u.email=== email   &&  u.password=== password);
    return user || null;
};