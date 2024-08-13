import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyBnXBzzrGjSTlxZedy8YN8P7hQHwXfJRoE",
    authDomain: "codesingla-9d9dd.firebaseapp.com",
    projectId: "codesingla-9d9dd",
    storageBucket: "codesingla-9d9dd.appspot.com",
    messagingSenderId: "680905442483",
  appId: "1:680905442483:web:58e39975740a47c4f61cc6"
};
const app = initializeApp(firebaseConfig);

const messaging = getMessaging();