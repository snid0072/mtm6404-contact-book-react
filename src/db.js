import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDubtX5UgPjATXplrOijpwQtAXPPlvKvFw",
  authDomain: "contact-page-ff5db.firebaseapp.com",
  projectId: "contact-page-ff5db",
  storageBucket: "contact-page-ff5db.firebasestorage.app",
  messagingSenderId: "1019637879639",
  appId: "1:1019637879639:web:0a1015d94b2aaec06ae412"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db