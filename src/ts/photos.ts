interface PhotoData {
    albumId:number,
    id:number,
    thumbnailUrl:string,
    title:string,
    url:string,
}

export class Photos implements PhotoData{

    constructor(
        public id: number,
        public title: string,
        public albumId: number,
        public thumbnailUrl: string,
        public url: string,
    ) {}
   

    static async initPhotos(id: string): Promise<Photos[]> {
        let config:string = 'https://jsonplaceholder.typicode.com/albums/';
        const albumID:string = `${String(id)}/photos`;
        config += albumID;

        const fetchPhotos = async(): Promise<PhotoData[]> => {
            const response = await fetch(config);
            const json = await response.json();
            return JSON.parse(JSON.stringify(json));
        }

        const photos = await fetchPhotos();
        const newPhotos = photos.map((element: PhotoData) => 
            new Photos(element.id, element.title, element.albumId, element.thumbnailUrl, element.url)
        );

        return newPhotos;
    }
}