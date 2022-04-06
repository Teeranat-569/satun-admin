

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
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
 firestore = firebase.firestore()

  function name() {
    firestore.collection("test").add({ 
    item: "Nendoroid",
    name: "Hatsune Miku",
    id: 33,
    available: true
});
  }
 
//   const auth =  firebase.auth();

//   //signup function
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
//   bool = true;
//   }

//   //signIN function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));

   
//        Swal.fire(
//         'เข้าสู่ระบบสำเร็จ!',
//         '',
//         ''
//     )
//     window.location = "home.html";
//   }


//   //signOut

//   function signOut(){
//     auth.signOut();
//     alert("ต้องการออกจากระบบหรือไม่?");
//     window.location = "index.html";

//   }

//   //active user to homepage
//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       // alert("Active user "+email);
//     //   Swal.fire(
//     //     'Good job!',
//     //     'You clicked the button!',
//     //     'success'
//     // )
   
//     Swal.fire(
//       'เข้าสู่ระบบสำเร็จ!',
//       '',
//       ''
//   )
//     }else{
    
      

//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'ไม่พบการเข้าสู่ระบบ'
//     })
//   // if (window.location = "home.html"
//   //     ) {
      
//   //     }
//   //     else{}
//     // window.location = "index.html";
// // bool
//     }

  // })