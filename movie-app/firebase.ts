// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCInJ2RHzJ9XAhYvROMbHybqO0l91Orrmc",
  authDomain: "movie-app-31a3f.firebaseapp.com",
  projectId: "movie-app-31a3f",
  storageBucket: "movie-app-31a3f.appspot.com",
  messagingSenderId: "509985775025",
  appId: "1:509985775025:web:a6d6c25a12919aabeeb190"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }