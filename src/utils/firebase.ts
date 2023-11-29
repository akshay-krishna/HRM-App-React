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

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file: any): Promise<string> => {
  try {
    const storageRef = strRef(storage, crypto.randomUUID());
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  } catch (err) {
    console.error(err);
    throw new Error("Image upload failed");
  }
};
