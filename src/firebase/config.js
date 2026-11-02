import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBE3VVOl3FRWZAO1Ik9YG6CR4CrGZneI20",
    authDomain: "tienda-de-mascotas-dc375.firebaseapp.com",
    projectId: "tienda-de-mascotas-dc375",
    storageBucket: "tienda-de-mascotas-dc375.firebasestorage.app",
    messagingSenderId: "605962797189",
    appId: "1:605962797189:web:651b44f133049d1999a9ec",
    measurementId: "G-PEDCPSW53Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);