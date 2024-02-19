import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFAkEmFTWox8EcmgBmx0Z7kQuEo8XCA9o,",
  authDomain: "tic-tac-yai-f01a4.firebaseapp.com,",
  projectId: "tic-tac-yai-f01a4,",
  storageBucket: "tic-tac-yai-f01a4.appspot.com,",
  messagingSenderId: "598571808575,",
  appId: "1:598571808575:web:eff7ad5e37ed7a68e3858a"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getAuth(firebaseApp);
