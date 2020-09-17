var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var form = document.getElementById("login");
var uid = document.getElementById("login_email");
var pass = document.getElementById("login_pass");
var login_sel = true;
const errorElement = document.getElementById("error");
let users = [];

function register_animate() {
    login_sel = false;
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login_animate() {
    login_sel = true;
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}


// function refresh_info() {
//     if (login_sel) {
//         form = document.getElementById("login");
//         uid = document.getElementById("login_email");
//         pass = document.getElementById("login_pass");
//     }
//     else {
//         form = document.getElementById("register");
//         uid = document.getElementById("reg_email");
//         pass = document.getElementById("reg_pass");
//         confpass = document.getElementById("reg_conf_pass");
//     }
// }

// form.addEventListener('submit', (e) => {
//     let messages = [];
//     if (uid.value === '' || uid.value == null) {
//         messages.push("Email ID required");
//     }

//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ');
//     }
// })