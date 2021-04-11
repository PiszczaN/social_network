interface AlbumData {
    id:number,
    title:string,
    userId:number,
}

export class Albums implements AlbumData{

    constructor(
        public id: number,
        public title: string,
        public userId: number,
    ) {}

    static async initAlbums(id: string): Promise<Albums[]> {
        let config:string = 'https://jsonplaceholder.typicode.com/users/';
        const userID:string = `${String(id)}/albums`;
        config += userID;

        const fetchAlbums = async(): Promise<AlbumData[]> => {
            const response = await fetch(config);
            const json = await response.json();
            return JSON.parse(JSON.stringify(json));
        }

        const albums = await fetchAlbums();
        const newAlbums = albums.map((element: AlbumData) => 
            new Albums(element.id, element.title, element.userId)
        );

        return newAlbums;
    }
}