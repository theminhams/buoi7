import { auth } from "./config.js"
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const buttonInput = document.querySelector(".logout")
const xulyDangXuat = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("Đăng xuất thành công")
        window.location.href = "./dangky.html"
      }).catch((error) => {
        // An error happened.
      });
}
buttonInput.addEventListener('click', xulyDangXuat)