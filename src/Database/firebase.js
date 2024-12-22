import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth} from "firebase/auth";
// import Constants from 'expo-constants'


const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey,
    authDomain: Constants.expoConfig.extra.authDomain,
    projectId: Constants.expoConfig.extra.projectId,
    storageBucket: Constants.expoConfig.extra.storageBucket,
    messagingSenderId:Constants.expoConfig.extra.messagingSenderId,
    appId:Constants.expoConfig.extra.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const auth = getAuth(app);
export default app