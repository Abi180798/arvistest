import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCWdeGFciFytj-Q9781R0b1E1odNm76oas",
  authDomain: "habibstorearvis.firebaseapp.com",
  projectId: "habibstorearvis",
  storageBucket: "habibstorearvis.appspot.com",
  messagingSenderId: "803322863661",
  appId: "1:803322863661:web:594f3ccf23eb76143218a4",
  measurementId: "G-Y47T27TQTF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

