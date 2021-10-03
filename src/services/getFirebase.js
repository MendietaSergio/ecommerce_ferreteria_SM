import firebase from "firebase"
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0fzm4IF3-wMurT-hP8ff5jfRTNVPECZA",
    authDomain: "ecommerce-ferreteria.firebaseapp.com",
    projectId: "ecommerce-ferreteria",
    storageBucket: "ecommerce-ferreteria.appspot.com",
    messagingSenderId: "452286409016",
    appId: "1:452286409016:web:1eb36ffd0fa58268e979cd"
  };
  
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig)


//exporto la base de datos.

export const getFirebase = () => {
    return app
}

//exporto par usarlo en cualquier componente.
export const getFirestore = () =>{
    
    return firebase.firestore(app)
}

//hacer funcion para devolver la fecha asi no tengo que importar en el carrito, 

