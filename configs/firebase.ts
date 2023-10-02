import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC1Ebs2jCy3GN5R6a5wzaCl4sQRQShv74k",
    authDomain: "extravel-29c00.firebaseapp.com",
    projectId: "extravel-29c00",
    storageBucket: "extravel-29c00.appspot.com",
    messagingSenderId: "1057607721212",
    appId: "1:1057607721212:web:502fcfc2e7586c04b23779",
    measurementId: "G-XGN9R5928M"
}

export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
export const firebaseStore = getFirestore(app)