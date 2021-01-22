interface UserData {
    id: number;
    name: string;
    address: string[];
    company: string[];
    email: string;
    phone: string;
    username: string;
    website: string;
}

export class Users implements UserData {
    
    constructor(
        public id: number,
        public name: string,
        public address: string[],
        public company: string[],
        public email: string,
        public phone: string,
        public username: string,
        public website: string,
    ) {}

    static async initUsers(): Promise<Users[]> {
        const fetchUsers = async(): Promise<UserData[]> => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            return JSON.parse(json);
        }

        const users = await fetchUsers();
        users.map((element: UserData) => 
            new Users(element.id, element.name, element.address, element.company, element.email, element.phone, element.username, element.website)
        );

        return users;
    }


    
}