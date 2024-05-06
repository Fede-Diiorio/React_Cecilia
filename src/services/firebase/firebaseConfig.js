import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzwq3L7fKCZFtFlbYvRK29Gu_R--YrOVQ",
    authDomain: "desafiofinal-cd5c3.firebaseapp.com",
    projectId: "desafiofinal-cd5c3",
    storageBucket: "desafiofinal-cd5c3.appspot.com",
    messagingSenderId: "214905564803",
    appId: "1:214905564803:web:617206f962e4ce3a8b35b6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)