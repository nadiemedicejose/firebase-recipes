import firebaseConfig from './FirebaseConfig';
import {
	addDoc,
	doc,
	getDoc,
	collection as firestoreCollection,
	query,
	where,
	orderBy,
	limit,
	startAfter,
	getDocs,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore';

const firestore = firebaseConfig.firestore;

const createDocument = (collection, document) => {
	return addDoc(firestoreCollection(firestore, collection), document);
};

const FirebaseFirestoreService = {
	createDocument,
};

export default FirebaseFirestoreService;
