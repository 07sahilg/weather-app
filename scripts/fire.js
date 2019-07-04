import firebase from 'firebase'
var config={
    apiKey: "AIzaSyA7IRG16fquM6sos7nAi2yCJovuNh4p1BQ",
    authDomain: "chat-ec550.firebaseapp.com",
    databaseURL: "https://chat-ec550.firebaseio.com",
    projectId: "chat-ec550",
    storageBucket: "chat-ec550.appspot.com",
    messagingSenderId: "467521625342",
    appId: "1:467521625342:web:eded65b3bad00b10"
  };
  var fire=firebase.initializeApp(config)
  export default fire