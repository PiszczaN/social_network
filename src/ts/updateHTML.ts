import { Posts } from "./posts";
import { Users } from "./users";

export class UpdateHTML {
    static async showUsers() {
        const users = await Users.initUsers();
        const usersWraper = document.querySelector(".accountsList__wraper");
         
        for (const iterator of users) {
                
            usersWraper.innerHTML = usersWraper?.innerHTML + `
                <a href="userProfile.html?id=${iterator.id}" class="accountsList__account">
                    <div class="account__username">${iterator.username}</div>
                    <div class="account__info">${iterator.name}</div>
                    <div class="account__info">${iterator.email}</div>
                </a>
            `;
        }
    }

    static async completeUserProfile(id: string) {
        const user = await Users.initUser(id);
        const posts = await Posts.initPosts(id);
        const userName = document.querySelector(".profil__show");
        const postsWraper = document.querySelector(".table__container");

        userName.innerHTML = `<h1>${user.username}</h1><h3>(${user.name})</h3>`;

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

}