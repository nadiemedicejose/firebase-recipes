// import firebase from 'firebase';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_ID
};

// Version 8
// const classicFirebaseApp = firebase.initializeApp(config);
// const auth = classicFirebaseApp.auth();
// const firestore = classicFirebaseApp.firestore();
// const storage = classicFirebaseApp.storage();

// Version 9
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const firebaseConfig = {
	auth,
	firestore,
	storage,
};

export default firebaseConfig;
