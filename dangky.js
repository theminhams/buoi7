import { auth } from "./config.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const buttonInput = document.querySelector("#register")
const xulyDangKi = (e) => {
        e.preventDefault()
        const email = emailInput.value 
        const password = passwordInput.value
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("Đăng kí thành công")
            window.location.href = "./dangnhap.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
}
buttonInput.addEventListener("click", xulyDangKi)