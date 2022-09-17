import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDX9h1PTcm-KlMJ2Xh4LeGu0R9tzlxyKCY",
  authDomain: "venta-reaper-crew.firebaseapp.com",
  projectId: "venta-reaper-crew",
  storageBucket: "venta-reaper-crew.appspot.com",
  messagingSenderId: "522035634256",
  appId: "1:522035634256:web:4695e9b967c0d2eaad7155"
};

const app = initializeApp(firebaseConfig);
export const dB = getFirestore(app);
