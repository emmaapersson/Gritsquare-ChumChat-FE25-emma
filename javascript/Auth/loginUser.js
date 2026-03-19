import { usersRef, db } from "./firebase.js";
import { push, set, get, update } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

export const loginUser = async (username, password) => {
    try {
        const snapshot = await get(usersRef);

        if (!snapshot.exists()) {
            alert("No users found");
            return;
        }

        const users = snapshot.val();
        let foundUser = null;

        for (let id in users) {
            if (users[id].username === username && users[id].password === password) {
                foundUser = users[id];
                break;
            }
        }

        if (foundUser) {
            currentUser = foundUser;
            alert("Logged in!");
        } else {
            alert("Wrong username or password");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong");
    }
};