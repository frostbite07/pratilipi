// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAyUS8xwm5DI6XiF9G_S5RWIgw7dQhXbb4",
//     authDomain: "pratilipi-4433c.firebaseapp.com",
//     databaseURL: "https://pratilipi-4433c.firebaseio.com",
//     projectId: "pratilipi-4433c",
//     storageBucket: "pratilipi-4433c.appspot.com",
//     messagingSenderId: "367911358435",
//     appId: "1:367911358435:web:5adfcdf59c880c4bed5ad6"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// LOGIN //

const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_pass');
const register_email = document.getElementById('reg_email');
const register_password = document.getElementById('reg_pass');
const btn_login = document.getElementById('login_sub');
const btn_reg = document.getElementById('register_sub');
const btn_signout = document.getElementById('signout');



btn_login.addEventListener('click', e => {
    const email = login_email.value;
    const pass = login_password.value;
    alert("Signing In");
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

btn_reg.addEventListener('click', e => {
    const email = register_email.value;
    const pass = register_password.value;
    const auth = firebase.auth();
    alert("Registering");
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

// btn_signout.addEventListener('click', e => {
//     console.log("fuon");
//     firebase.auth().signOut().then(function () {
//         console.log('Signed Out');
//         window.location.href = "index.html";
//     }, function (error) {
//         console.error('Sign Out Error', error);
//     });
// });

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser)
        window.location.href = "story_page.html";
    } else {
        console.log("not logged in")
    }
});

function sign_out() {
    firebase.auth().signOut();
    window.location.href = "index.html";

}

