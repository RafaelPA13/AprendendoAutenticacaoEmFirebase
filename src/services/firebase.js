import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCINcZ5mK3OoAFFfURCj08-3IRGo0jpt1s",
  authDomain: "aprendendofirebaseauth.firebaseapp.com",
  projectId: "aprendendofirebaseauth",
  storageBucket: "aprendendofirebaseauth.appspot.com",
  messagingSenderId: "985851367511",
  appId: "1:985851367511:web:5558af6e2b53192c37d312"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app