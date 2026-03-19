import { usersRef, db } from "./firebase.js";
import { push, set, get, update } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

export const registerUser = (username, password, role) => {
    const newUser = push(usersRef);

    const userData = {
        user_id: newUser.key,
        username: username,
        password: password,
        role: role,
        isLoggedIn: true,
        img: "../img/kid.png",
    }

    set(newUser, userData);
    currentUser = userData;
}