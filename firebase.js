// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
export const firebaseConfig = {
  apiKey: "AIzaSyBioqtuLZJHX-jL_NKrO-fQ9wxXgSw8k4g",
  authDomain: "baldgenie2.firebaseapp.com",
  projectId: "baldgenie2",
  storageBucket: "baldgenie2.appspot.com",
  messagingSenderId: "307471108385",
  appId: "1:307471108385:web:ba48cd2b93428767451660",
  measurementId: "G-4LNQ1TRKD5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const storage = getStorage()


