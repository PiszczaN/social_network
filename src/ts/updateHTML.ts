import { Posts } from "./posts";
import { Users } from "./users";
import { StickyProfileGuideAnimations } from "./animations";
import { Albums } from "./albums";
import { Photos } from "./photos";

export class UpdateHTML {
    static async showUsers() {
        const users = await Users.initUsers();
        const usersWraper = document.querySelector(".accountsList__wraper");
         
        for (const iterator of users) {
                
            usersWraper.innerHTML = usersWraper?.innerHTML + `
                <a href="userProfile.html?location=posts&id=${iterator.id}" class="accountsList__account">
                    <div class="account__username">${iterator.username}</div>
                    <div class="account__info">${iterator.name}</div>
                    <div class="account__info">${iterator.email}</div>
                </a>
            `;
        }
    }

    static async completeUserHeader(id: string) {
        window.addEventListener("scroll", () => { StickyProfileGuideAnimations(); }); 
        const userName = document.querySelector(".profil__show");
        const guideList = document.querySelector(".guide__list");
        const user = await Users.initUser(id);

        userName.innerHTML = `<h1>${user.username}</h1><h3>(${user.name})</h3>`;

        guideList.innerHTML = `
            <li><a href="userProfile.html?location=posts&id=${id}">tablica</a></li>
            <li><a href="userAlbums.html?location=albums&id=${id}">zdjęcia</a></li>
            <li><a href="userInformations.html?location=informations&id=${id}">informacje</a></li>
        `;
    }

    static async completeUserProfile(id: string) {
        UpdateHTML.completeUserHeader(id);
        const posts = await Posts.initPosts(id);
        const postsWraper = document.querySelector(".table__container");

        posts.forEach(element => {
            postsWraper.innerHTML += `
                <div class="table__post" id="post${element.id}">

                    <div class="post__title">
                        ${element.title}
                    </div>
                    <div class="post__body">
                        ${element.body}
                    </div>
                    <div class="post__interaction">
                        komentarze: 42
                    </div>

                </div>
            `;
        });
    }

    static async completeUserAlbums(id: string) {
        UpdateHTML.completeUserHeader(id);
        const albums = await Albums.initAlbums(id);
        const albumsWraper = document.querySelector(".albums__wraper");
        let albumIterator = 1;
        albums.forEach(element => {
            
            albumsWraper.innerHTML += `
                <a href="userPhotos.html?location=photos&id=${id}&albumId=${element.id}" class="albums__album">
                    <h2>Album ${albumIterator}</h2>
                    <p>${element.title}</p>
                </a>
            `;
            albumIterator++;
        });
        albumIterator = 1;
        
    }

    static async completeUserPhotos(id: string, albumId: string) {
        UpdateHTML.completeUserHeader(id);
        const photos = await Photos.initPhotos(albumId);
        const albumsWraper = document.querySelector(".albums__wraper");

        photos.forEach(element => {
            albumsWraper.innerHTML += `
                <img src="${element.thumbnailUrl}" />
            `;
        });
    }

    static async completeUserInformations(id: string) {
        UpdateHTML.completeUserHeader(id);
        const user = await Users.initUser(id);
        const infoWraper = document.querySelector(".informations__wraper");

        
            infoWraper.innerHTML = `
                <h1>BIO</h1>
                <div class="informations__info">
                    <p>username:
                        <h2>${user.username}</h2>
                    </p>
                </div>
                <div class="informations__info">
                    <p>name:
                        <h2>${user.name}</h2>
                    </p>
                </div>
                <div class="informations__info">
                    <p>company:
                        <h2>${user.company.name}</h2>
                    </p>
                </div>
                <div class="informations__info">
                    <p>website:
                        <h2>${user.website}</h2>
                    </p>
                </div>
                <h1>Contact</h1>
                <div class="informations__info">
                    <p>email:
                        <h2>${user.email}</h2>
                    </p>
                </div>
                <div class="informations__info">
                    <p>phone:
                        <h2>${user.phone}</h2>
                    </p>
                </div>
                
                <h1>Address</h1>

                <div class="informations__info">
                    <p>city:
                        <h2>${user.address.city}</h2>
                    </p>
                </div>
                <div class="informations__info">
                    <p>street:
                        <h2>${user.address.street}</h2>
                    </p>
                </div>
            `;
      
    }

}