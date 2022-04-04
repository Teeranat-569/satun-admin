
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const url = 'localhost';
  var firebaseConfig = {
    // apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
    // authDomain: "login-demo-254f7.firebaseapp.com",
    // projectId: "login-demo-254f7",
    // storageBucket: "login-demo-254f7.appspot.com",
    // messagingSenderId: "228883805517",
    // appId: "1:228883805517:web:db9063121d6bf3a79ab304",
    // measurementId: "G-C8Q2HYKHY1"

    apiKey: "AIzaSyCbdOZp1MfMSkTXl1ZDKIy8m6K32VuttD4",
    authDomain: "stuncity-24791.firebaseapp.com",
    databaseURL: "https://stuncity-24791.firebaseio.com",
    projectId: "stuncity-24791",
    storageBucket: "stuncity-24791.appspot.com",
    messagingSenderId: "281522763629",
    appId: "1:281522763629:web:6f1f883f99307fa3740c64",
    measurementId: "G-4538TQL69P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
//   function signUp(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     // alert("SignUp Successfully");
//     Swal.fire(
//       'Good job!',
//       'You clicked the button!',
//       'success'
//   )
//   }

//   //signIN function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));

   
    
//   }


  //signOut

  function signOut(){
    auth.signOut();
    alert("ต้องการออกจากระบบหรือไม่?");
    window.location = "index.html";
    // Swal.fire(
    //             'ออกจากระบบแล้ว',
    //             '',
    //             ''
    //         )
  }

  //active user to homepage
//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       // alert("Active user "+email);
//       Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//     )
//     window.location = "admin.html";

//     }else{
//       // alert("")
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'ไม่พบการเข้าสู่ระบบ'
//     })
//     }
    
//   })