import { auth } from "./config.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const buttonInput = document.querySelector("#signup")
const xulyDangKi = (e) => {
        e.preventDefault()
        const email = emailInput.value 
        const password = passwordInput.value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("Đăng nhập thành công")
            window.location.href = "./trangchu.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
        
}
buttonInput.addEventListener("click", xulyDangKi)