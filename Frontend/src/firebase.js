import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD0w9nnKXxO3Ai6MWfGweJwWKAOseSNvdA",
    authDomain: "hellosign-37972.firebaseapp.com",
    projectId: "hellosign-37972",
    storageBucket: "hellosign-37972.appspot.com",
    messagingSenderId: "104517207179",
    appId: "1:104517207179:web:0b59ad2759e4babb40808e"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
