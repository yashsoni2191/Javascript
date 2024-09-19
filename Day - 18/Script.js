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
    document.querySelector("#EmailText").innerText = "Email required"
    document.querySelector("#passwordText").innerText = "Password required"

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
        Pass: password,
    }
    if(isValid == true){
        data.push(obj)
        alert("User Signup Successfully")
      }
     console.log(data)  
})

document.querySelector("#loginup").addEventListener("submit",(ddd)=>{
    ddd.preventDefault()

    let loginEmail = document.getElementById("#loginemail").value
    let loginPassword = document.getElementById("#loginpass").value

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