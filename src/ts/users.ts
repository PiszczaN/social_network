import { UpdateHTML } from "./updateHTML";
interface UserData {
    id: number;
    name: string;
    address: address;
    company: company;
    email: string;
    phone: string;
    username: string;
    website: string;
}

interface address {
    city: string,
    geo: geo,
    street: string,
    suite: string,
    zipcode: string,
}

interface company {
    bs: string,
    catchPhrase: string,
    name: string,
}

interface geo {
    lat: string,
    lng: string,
}

export class Users implements UserData {
    
    constructor(
        public id: number,
        public name: string,
        public address: address,
        public company: company,
        public email: string,
        public phone: string,
        public username: string,
        public website: string,
    ) {}

    static async initUsers(): Promise<Users[]> {
        const fetchUsers = async(): Promise<UserData[]> => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await response.json();
            return JSON.parse(JSON.stringify(json));
        }
        
        const users = await fetchUsers();
        const newUsers = users.map((element: UserData) => 
            new Users(element.id, element.name, element.address, element.company, element.email, element.phone, element.username, element.website)
        );
        
        return newUsers;
    }


    
}