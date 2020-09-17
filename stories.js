// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyUS8xwm5DI6XiF9G_S5RWIgw7dQhXbb4",
    authDomain: "pratilipi-4433c.firebaseapp.com",
    databaseURL: "https://pratilipi-4433c.firebaseio.com",
    projectId: "pratilipi-4433c",
    storageBucket: "pratilipi-4433c.appspot.com",
    messagingSenderId: "367911358435",
    appId: "1:367911358435:web:5adfcdf59c880c4bed5ad6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


//  FETCH & DISPLAY
// Story 1
const pObject1 = document.getElementById("Story1Short");
const TitleObject1 = document.getElementById("Story1Title");
const StoryObject1 = document.getElementById("FullStory1");
const ViewCounter = document.getElementById("View1");

const Story1 = firebase.database().ref().child("Story1");
const Story1Title = Story1.child('Title')
const Story1Short = Story1.child('StoryShort')
const FullStory1 = Story1.child('StoryFull')
const Story1view = Story1.child('Viewing')
// Story1.on('value', snap => {
//     preObject1.innerText = JSON.stringify(snap.StoryShort.val(), null, 3);
// });

Story1Title.on('value', snap => {
    TitleObject1.innerText = snap.val()
});
Story1Short.on('value', snap => {
    pObject1.innerText = snap.val()
});
FullStory1.on('value', snap => {
    StoryObject1.innerText = snap.val()
});
Story1view.on('value', snap => {
    ViewCounter.innerText = snap.val()
});

// Story 2

const pObject2 = document.getElementById("Story2Short");
const TitleObject2 = document.getElementById("Story2Title");
const StoryObject2 = document.getElementById("FullStory2");
const ViewCounter2 = document.getElementById("View2");

const Story2 = firebase.database().ref().child("Story2");
const Story2Title = Story2.child('Title')
const Story2Short = Story2.child('StoryShort')
const FullStory2 = Story2.child('StoryFull')
const Story2view = Story2.child('Viewing')
// Story1.on('value', snap => {
//     preObject1.innerText = JSON.stringify(snap.StoryShort.val(), null, 3);
// });

Story2Title.on('value', snap => {
    TitleObject2.innerText = snap.val()
});
Story2Short.on('value', snap => {
    pObject2.innerText = snap.val()
});
FullStory2.on('value', snap => {
    StoryObject2.innerText = snap.val()
});
Story1view.on('value', snap => {
    ViewCounter2.innerText = snap.val()
});

// Story 3

const pObject3 = document.getElementById("Story3Short");
const TitleObject3 = document.getElementById("Story3Title");
const StoryObject3 = document.getElementById("FullStory3");
const ViewCounter3 = document.getElementById("View3");

const Story3 = firebase.database().ref().child("Story3");
const Story3Title = Story3.child('Title')
const Story3Short = Story3.child('StoryShort')
const FullStory3 = Story3.child('StoryFull')
const Story3view = Story3.child('Viewing')
// Story1.on('value', snap => {
//     preObject1.innerText = JSON.stringify(snap.StoryShort.val(), null, 3);
// });

Story3Title.on('value', snap => {
    TitleObject3.innerText = snap.val()
});
Story3Short.on('value', snap => {
    pObject3.innerText = snap.val()
});
FullStory3.on('value', snap => {
    StoryObject3.innerText = snap.val()
});
Story3view.on('value', snap => {
    ViewCounter3.innerText = snap.val()
});



function sign_out() {
    firebase.auth().signOut();
    window.location.href = "index.html";

}