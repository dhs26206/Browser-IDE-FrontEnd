import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

export function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        Token();
      }
    })
  }
  
  
  
  
  // Add the public key generated from the console here.
  const firebaseConfig = {
      apiKey: "AIzaSyBnXBzzrGjSTlxZedy8YN8P7hQHwXfJRoE",
      authDomain: "codesingla-9d9dd.firebaseapp.com",
      projectId: "codesingla-9d9dd",
      storageBucket: "codesingla-9d9dd.appspot.com",
      messagingSenderId: "680905442483",
    appId: "1:680905442483:web:58e39975740a47c4f61cc6"
};
const app = initializeApp(firebaseConfig);

function Token(){
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: "BN2nYtERWICelN0HD2XOgH3G8V-ocfb_0gWQ57__4v7crXWeMtKtyJVGMYPsIrDvioY56iG58aSG"}).then((currentToken) => {
        if (currentToken) {
            console.log(currentToken);}
        })
}
  // Initialize Firebase
  
  
  // const [code,setCOde] = useState("def funct(arr,n):\n\t#Enter Code Here And return Integer")
  // const HandleChange = (value, event) => {
  //   setCOde(value)
  //   console.log(value)
  // }
  