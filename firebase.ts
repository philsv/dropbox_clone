import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAoir9Sxd8BtKySKmlDCz8jIkj4Z8ltil8",
    authDomain: "dropbox-clone-db0e3.firebaseapp.com",
    projectId: "dropbox-clone-db0e3",
    storageBucket: "dropbox-clone-db0e3.appspot.com",
    messagingSenderId: "306231260560",
    appId: "1:306231260560:web:9597b45e8c3cd54093ef15"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };