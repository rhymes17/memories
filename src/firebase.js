
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP__API_KEY,
  authDomain: process.env.REACT_APP__AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP__DATABASE_URL, 
  projectId: process.env.REACT_APP__PROJECT_ID,
  storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP__APP_ID,
  measurementId: "G-G1FKNR0PS0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };