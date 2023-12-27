function data_signup(){
    let email=document.getElementById("emailId").value;
    let password=document.getElementById("password").value;
    let confirmpass=document.getElementById("confirmpassword").value;
    let contact=document.getElementById("contact").value;

    if(email=="" || password=="" || confirmpass=="" || contact==""){
        alert("All field are Mandatory");
        return false;
    }
    else if(password!=confirmpass){
        alert("Mismatched password");
        return false;
    }
    else if(isNaN(contact)){
        alert("Contact should be in digits only");
        return false;
    }
    else if(contact.length<10 || contact.length>10){
        alert("Contact number should be of 10 digits only");
        return false;
    }
    else{
        window.location.href="abc.html";
        return true;
    }
}

function data_signin(){
    let email=document.getElementById("emailId").value;
    let password=document.getElementById("password").value;
    // let confirmpass=document.getElementById("confirmpassword").value;
    let contact=document.getElementById("contact").value;

    if(email=="" || password=="" || contact==""){
        alert("All field are Mandatory");
        return false;
    }
    // else if(password!=confirmpass){
    //     alert("Mismatched password");
    //     return false;
    // }
    else if(isNaN(contact)){
        alert("Contact should be in digits only");
        return false;
    }
    else if(contact.length<10 || contact.length>10){
        alert("Contact number should be of 10 digits only");
        return false;
    }
    else{
        window.location.href="abc.html";
        return true;
    }
}
function change(){
    let signupbtn=document.getElementById("signupbtn");
    let signinBtn=document.getElementById("signinbtn");
    let confpass=document.getElementById("confirmpassworddiv");
    let title=document.getElementById("title");

    signinBtn.onclick=function(){
        confpass.style.maxHeight="0";
        title.innerHTML="Sign In";
        signupbtn.classList.add("disable");
        signinbtn.classList.remove("disable");
    
        data_signin();
        
    }
    signupbtn.onclick=function(){
        confpass.style.maxHeight="60px";
        title.innerHTML="Sign Up";
        signupbtn.classList.remove("disable");
        signinbtn.classList.add("disable");

        data_signup();
        
    }
    
}






