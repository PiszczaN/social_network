import { Posts } from "./posts";
import { Users } from "./users";
import { StickyProfileGuideAnimations } from "./animations";
import { Albums } from "./albums";

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
            <li><a href="userPhotos.html?location=photos&id=${id}">zdjęcia</a></li>
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

    }

    static async completeUserInformations(id: string) {
        UpdateHTML.completeUserHeader(id);
        const user = await Users.initUser(id);
        
    }

}