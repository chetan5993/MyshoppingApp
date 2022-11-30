const sinup = document.querySelector(".sin-up")
const sinin = document.querySelector(".sin-in")
const btncross = document.querySelector(".btnClose")
const btncrosssinin = document.querySelector(".btnClosesinin")
var signup = false;
var signin = false;
const submit=document.querySelector(".submit")
const signinsubmit=document.querySelector(".signinsubmit")

// console.log(btncross)

signupbtn.addEventListener("click", () => {
    if (signin == false) {
        sinup.style.display = "block";
        signup = true;
    }


    // signinbtn.disabled=true;
    //btncrosssinin.parentElement.style.display="none"
    //signinbtn.disabled = true;
})

btncross.addEventListener("click", () => {

    btncross.parentElement.style.display = "none"
    signup = false;

})

signinbtn.addEventListener("click", () => {
    if (signup == false) {
        sinin.style.display = "block";
        signin = true
    }
    console.log("clicked")
  
})



btncrosssinin.addEventListener("click", () => {

    btncrosssinin.parentElement.style.display = "none"
    signin = false;
})


// --------------------------------------validation sign up------------------------------------------------------//

function formvalidation(){
    const firstname=document.querySelector(".firstName")
    if(firstname.value=="" || firstname.value.length<3){
        alert("please enter a valid first name")
    }
    const lastname=document.querySelector(".lastName")
    if(lastname.value=="" || lastname.value.length<3){
        alert("please enter a valid last name")
    }
    const email=document.querySelector(".email")

    if(email.value=="" || email.value.length<10){
        alert("please enter a valid Email id")
    }
    const username=document.querySelector(".userName")
    if(username.value=="" || username.value.length<6){
        alert("please enter a valid usename")
    }
    const password=document.querySelector(".password")
    if(password.value=="" || password.value.length<8){
        alert("please enter a  valid password")
    }
    const cpassword=document.querySelector(".cpassword")
    if(password.value!==cpassword.value){
        alert("password not match")
    }
localStorage.setItem("email", email.value);
localStorage.setItem("password", password.value);


    btncross.parentElement.style.display = "none";

firstname.value ="";
 lastname.value="";
 email.value ="";
  username.value ="";
   password.value  ="";
    cpassword.value="";
}

submit.addEventListener("click",formvalidation)


// --------------------------------------validation sign in------------------------------------------------------//

function signinvalidation(){
    // console.log("clicked")
const signinemail= document.querySelector(".signinemail")
const signinpassword=document.querySelector(".signinpassword")
// localconsole.log(signinemail,signinpassword)
// console.log(localStorage.getItem("email"))
     if(localStorage.getItem("email")!=signinemail.value){
        alert("Email mot exist")
     }
     if(localStorage.getItem("password")!=signinpassword.value){
        alert("Invalid password")
        btncrosssinin.parentElement.style.display = "none"

        signinemail.value="";
        signinpassword.value="";

}
}
signinsubmit.addEventListener("click",signinvalidation)
