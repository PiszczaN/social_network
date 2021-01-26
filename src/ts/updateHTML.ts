import { Users } from "./users";

export class UpdateHTML {
    static async showUsers() {
        const usersWraper = document.querySelector(".accountsList__wraper");
        
            const users = await Users.initUsers();
                
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
}