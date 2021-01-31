import { UpdateHTML } from "./updateHTML";
const urlParams = new URLSearchParams(window.location.search);
const location:string = urlParams.get('location');

switch (location) {
    case "posts":
        UpdateHTML.completeUserProfile(urlParams.get('id') );
        break;
    case "albums":
        UpdateHTML.completeUserAlbums(urlParams.get('id') );
        break;
    case "informations":
        UpdateHTML.completeUserInformations(urlParams.get('id') );
        break;
    case "photos":
        UpdateHTML.completeUserPhotos(urlParams.get('id'),urlParams.get('albumId') );
        break;
}


