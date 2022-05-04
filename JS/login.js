const nameReg = document.getElementById("name-reg");
const emailReg = document.getElementById("email-reg");
const pswdReg = document.getElementById("pswd-reg");
const regesterBtn = document.getElementById("signup");

const emailLog = document.getElementById("name-login");
const pswdLog = document.getElementById("pswd-login");
const loginBtn = document.getElementById("login");
console.log(nameReg.value)
const nameRegx = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
const emailRegx = /^[a-zA-Z]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i;
const pswdRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
var flag = false;
// const checkName = nameRegx.test(nameReg.value);
// const checkEmail = emailRegx.test(emailReg.value);
// const checkPass = pswdRegx.test(pswdReg.value);


regesterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if ((nameReg.value != "") && (emailReg.value != "") && (pswdReg.value != "")) {
       
        if (nameRegx.test(nameReg.value)) {
            localStorage.setItem(`name`, `${nameReg.value}`);
            nameReg.classList.remove('error');
            flag = true;
        }
        else {
            nameReg.classList.add('error');
            flag = false;
        }
        if (emailRegx.test(emailReg.value)) {
            localStorage.setItem(`email`, `${emailReg.value}`);
            emailReg.classList.remove('error');
            flag = true;

        }
        else {
            emailReg.classList.add('error');
            flag = false;
        }
        if (pswdRegx.test(pswdReg.value)) {
            localStorage.setItem(`password`, `${pswdReg.value}`);
            pswdReg.classList.remove('error');
            flag = true;


        }
        else {
            pswdReg.classList.add('error');
            flag = false;
        }
        if (flag) {
            nameReg.value = "";
            pswdReg.value = "";
            emailReg.value = "";
            // document.getElementsByClassName("signin").style.transform = translateY("-450px");

        }
    }
    else {
        nameReg.classList.add('error');
        emailReg.classList.add('error');
        pswdReg.classList.add('error');

    }
});

loginBtn.addEventListener('click', function (e) {
    if (emailLog.value != "" && pswdLog.value != "") {
        if (emailLog.value == localStorage.getItem('email') && pswdLog.value == localStorage.getItem('password')) {
            location.href = "http://127.0.0.1:5500/welcome.html"
        }
        else {
            emailLog.classList.add('error');
            pswdLog.classList.add('error');
        }
    }
    else {
        emailLog.classList.add('error');
        pswdLog.classList.add('error');
    }
})

nameReg.addEventListener('change', () => {
    if (nameReg.value != "")
    nameReg.classList.remove('error');
    
},300)
nameReg.addEventListener('change',()=> {
    emailReg.classList.remove('error');
},300)
nameReg.addEventListener('change',()=> {
    pswdReg.classList.remove('error');
  
},300)
nameReg.addEventListener('change',()=> {
    emailLog.classList.remove('error');
    
},300)
nameReg.addEventListener('change',()=> {
    pswdLog.classList.remove('error');
   
},300)

