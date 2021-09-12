// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRfBfoHt1NIxIfS6bOCY_bGtjPB_HE-4I',
  authDomain: 'disney-plus-clone-fef1b.firebaseapp.com',
  projectId: 'disney-plus-clone-fef1b',
  storageBucket: 'disney-plus-clone-fef1b.appspot.com',
  messagingSenderId: '262709996589',
  appId: '1:262709996589:web:092565f0b6f9ba9fc01ca4',
  measurementId: 'G-ZE870G5Z9V',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
