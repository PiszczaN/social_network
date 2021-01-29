interface CommentData {
    body:string,
    email:string,
    id:number,
    name:string,
    postId:number,
}

export class Comments implements CommentData{

    constructor(
        public id: number,
        public body: string,
        public email: string,
        public name: string,
        public postId: number,
    ) {}
    
    static async initComments(id: string): Promise<Comments[]> {
        let config:string = 'https://jsonplaceholder.typicode.com/posts/';
        const postID:string = `${String(id)}/comments`;
        config += postID;

        const fetchComments = async(): Promise<CommentData[]> => {
            const response = await fetch(config);
            const json = await response.json();
            return JSON.parse(JSON.stringify(json));
        }

        const comments = await fetchComments();
        const newComments = comments.map((element: CommentData) => 
            new Comments(element.id, element.body, element.email, element.name, element.postId)
        );

        return newComments;
    }
}