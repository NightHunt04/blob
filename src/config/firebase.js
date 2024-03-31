import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAew_qpP3jXxHK2lnGeW3mp8aIWrh2rXnE",
  authDomain: "modelmate-90572.firebaseapp.com",
  projectId: "modelmate-90572",
  storageBucket: "modelmate-90572.appspot.com",
  messagingSenderId: "807879335870",
  appId: "1:807879335870:web:f2f38891a5be401c1e63ef",
  measurementId: "G-GN6VLEGFFF"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()