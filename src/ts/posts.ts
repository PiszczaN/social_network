interface PostData {
    body: string,
    id: number,
    title: string,
    userId: string,
}

export class Posts implements PostData{
   
    constructor(
        public body: string,
        public id: number,
        public title: string,
        public userId: string,
    ) {}

    static async initPosts(id: string): Promise<Posts[]>{
        let config:string = 'https://jsonplaceholder.typicode.com/users/';
        const userID:string = `${String(id)}/posts`;
        config += userID;

        const fetchPosts = async(): Promise<PostData[]> => {
            const response = await fetch(config);
            const json = await response.json();
            return JSON.parse(JSON.stringify(json));
        }

        const posts = await fetchPosts();
        const newPosts = posts.map((element: PostData) => 
            new Posts(element.body, element.id, element.title, element.userId)
        );

        return newPosts;
    }
}