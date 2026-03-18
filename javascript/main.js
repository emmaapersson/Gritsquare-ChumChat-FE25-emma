import { usersRef, db } from "./firebase.js"
import { push, onValue, remove, ref } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

onValue(usersRef, snapshot => {
    const data = snapshot.val();
    console.log(data);
})