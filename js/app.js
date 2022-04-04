const firebaseConfig = {
    apiKey: "AIzaSyCbdOZp1MfMSkTXl1ZDKIy8m6K32VuttD4",
    authDomain: "stuncity-24791.firebaseapp.com",
    databaseURL: "https://stuncity-24791.firebaseio.com",
    projectId: "stuncity-24791",
    storageBucket: "stuncity-24791.appspot.com",
    messagingSenderId: "281522763629",
    appId: "1:281522763629:web:75c1e67c173a1821740c64",
    measurementId: "G-CYRXNVCDX8"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  function login(event) {
    event.preventDefault()
  }

  function logout() {
    
  }