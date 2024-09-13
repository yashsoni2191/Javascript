// let formOpenBtn = document.querySelector("#form-open"),
//     signupForm = document.querySelector(".signup-form"),
//     loginForm = document.querySelector(".login-form"),
//     formCloseBtn = document.querySelectorAll(".fa-xmark"),
//     signupBtn = document.querySelector(".signup"),
//     loginHeaderBtn = document.querySelector(".login"), // login button from the header
//     loginFormBtn = signupForm.querySelector(".login"); // login button from the signup form

// // Open login form from the header
// formOpenBtn.addEventListener("click", () => {
//     loginForm.classList.add("show");
//     signupForm.classList.remove("show");
// });

// // Switch to signup form from the login form
// // signupBtn.addEventListener("click", () => {
// //     loginForm.classList.remove("show");
// //     signupForm.classList.add("show");
// // });

// // Switch to login form from the signup form
// loginFormBtn.addEventListener("click", () => {
//     signupForm.classList.remove("show");
//     loginForm.classList.add("show");
// });

// // Close forms
// formCloseBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         loginForm.classList.remove("show");
//         signupForm.classList.remove("show");
//     });
// });


let d = document.querySelector("#signupform")
let data = []
let isValid = true

document.querySelector("#swapButton").addEventListener("click", () => {
    document.querySelector("#SignupMain").style.display = "block"
    document.querySelector("#LoginMain").style.display = "none"
})
document.querySelector("#signupSwapButton").addEventListener("click", () => {
    document.querySelector("#SignupMain").style.display = "none"
    document.querySelector("#LoginMain").style.display = "block"
})

d.addEventListener("submit", (e) => {
    e.preventDefault()
    isValid = true
    document.querySelector("#emailText").innerText = ""
    document.querySelector("#PasswordText").innerText = ""

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    
    if (email.length == 0) {
        document.querySelector("#emailText").innerText = "Email Required!!"
        isValid = false
    }
    if (password.length < 8) {
        document.querySelector("#PasswordText").innerText = "Password must be greater than 8!!"
        isValid = false
    }
    let obj = {
        emailID: email,
        Username: username,
        Pass: password,
    }
    if(isValid == true){
        data.push(obj)
        alert("User Signup Successfully")
      }
     console.log(data)  
})

document.querySelector("#loginForm").addEventListener("submit",(ddd)=>{
    ddd.preventDefault()

    let loginEmail = document.getElementById("loginemail").value
    let loginPassword = document.getElementById("loginpass").value

    let ans = data.filter(element => {
       if(element.emailID == loginEmail && element.Pass == loginPassword){
           return element
       }
    }); 
    console.log(ans)
    if(ans.length > 0){
     alert("Login Successfull")
    }else{
     alert("Login Unsuccessfull")
    }
})