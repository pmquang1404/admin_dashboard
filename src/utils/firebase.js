// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmJ1TyU0992u8v94WmhpEWHH-FnfjsK7c",
    authDomain: "mobileshop-4e176.firebaseapp.com",
    databaseURL: "https://mobileshop-4e176-default-rtdb.firebaseio.com",
    projectId: "mobileshop-4e176",
    storageBucket: "mobileshop-4e176.appspot.com",
    messagingSenderId: "601555946820",
    appId: "1:601555946820:web:78b646fceecb7ed63fdb11",
    measurementId: "G-G9PLK7TLLH"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const dbRef = firebase.database().ref();

// Thay thế httpRequest bằng một hàm mới gọi là getFirebaseData
export const getFirebaseData = async (path) => {
    try {
        const snapshot = await dbRef.child(path).get();
        return snapshot.val();
    } catch (error) {
        console.error(error);
        return null;
    }
};