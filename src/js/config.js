import firebase from 'firebase/app';

const config= {
    apiKey: "AIzaSyCsTymR_CNnDJi4bvTFLmTOTTsp-UH88pQ",
    authDomain: "anigram-9f5d9.firebaseapp.com",
    databaseURL: "https://anigram-9f5d9.firebaseio.com",
    projectId: "anigram-9f5d9",
    storageBucket: "anigram-9f5d9.appspot.com",
    messagingSenderId: "595877506769"
}

const init = () => firebase.initializeApp(config);

init();