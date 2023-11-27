import { initializeApp } from "firebase/app";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as strRef,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcFtmysQuXGxB37CURuD9iYx1J_l9Bnjs",
  authDomain: "hr-management-app-8caae.firebaseapp.com",
  databaseURL:
    "https://hr-management-app-8caae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hr-management-app-8caae",
  storageBucket: "hr-management-app-8caae.appspot.com",
  messagingSenderId: "157752077809",
  appId: "1:157752077809:web:e504341bfa878ea0a4e850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = (file: any) => {
  try {
    if (!file) {
      return Promise.resolve(
        "https://firebasestorage.googleapis.com/v0/b/hr-management-app-8caae.appspot.com/o/avatar.svg?alt=media&token=0639e6c3-720b-4c13-bd81-2dd70b4b5f56"
      );
    }
    const storageRef = strRef(storage, crypto.randomUUID());
    return uploadBytes(storageRef, file).then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    });
  } catch (err) {
    console.log(err);
  }
};
