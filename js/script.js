let button=document.querySelector("#button");
let fname=document.querySelector("#fname");
let email=document.querySelector("#email");
let pwd=document.querySelector("#pwd");
let phone=document.querySelector("#phone");
let language=document.querySelector("#language");
let zip=document.querySelector("#zip");
let about=document.querySelector("#about");

fname.addEventListener("keyup", ()=>{
    const name = document.getElementById("name");
    name.innerHTML = "";
    let y = document.getElementById("fname").value;
try{
    if(y==y.charAt(0).toLowerCase())
    {
    throw "false";
    }
   
}
    catch(err){
        if(err=="false"){
            name.innerHTML = "<span style='color: red;'>false</span>"
        }
       
    
    }

})


email.addEventListener("keyup", ()=>{
    let addr = email.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try{
    if(!addr.match(regexEmail)){
        throw "false"
      
    }
    else{
    document.getElementById("for_email").innerHTML="<span style='color: green;'>true</span>";
    }
   
}
catch(err){
   if(err=="false")
    document.getElementById("for_email").innerHTML="<span style='color: red;'>false</span>"
   
}
})




pwd.addEventListener("keyup", ()=>{
    
        try
        {
      if(pwd.value.length < 5 )
      {
        throw "SHORT";
      }

      if(pwd.value.length > 10 )
      {
        throw "LONG";  
      }
  
     document.getElementById("pass").innerHTML="<span style='color: green;'>Password Validated!</span>";}
     catch(err)
     {
       if(err == "SHORT")
       {
         document.getElementById("pass").innerHTML="<span style='color: red;'>Not enough characters in password!</span>";
       }
       if(err == "LONG")
       {
        document.getElementById("pass").innerHTML="<span style='color: red;'>Password contains too many characters!</span>";
       }
     }
   })


    

    phone.addEventListener("keyup", ()=>{
        const message = document.getElementById("tele");
        message.innerHTML = "";
        let x = document.getElementById("phone").value;
        try {

          if(isNaN(x)) throw "not a number";
         
        }
        catch(err) {
          message.innerHTML = "<span style='color: red;'>Not a number</span>";
        }
      })



      zip.addEventListener("keyup", ()=>{
        try
        {
            
             if(zip.value.length<4 ){
                throw "false"
            
             }
             document.getElementById("try").innerHTML="<span style='color: green;'>true</span>"
             
        }
        catch(err)
    {
      if(err == "false")
      {
        document.getElementById("try").innerHTML="<span style='color: red;'>false</span>"
      }
      
    }

    })



      about.addEventListener("keyup",()=>{
        const message = document.getElementById("for_about");
        message.innerHTML = "";
        let x = document.getElementById("about").value;
        try {
          if(x == " ") throw "is empty";
          
        }
        catch(err) {
          message.innerHTML = "Error: " + err + ".";
        }
       
      })


      function validateForm() {
        document.getElementById("button")
        let a = document.getElementsByClassName("field");
        try{
        for(i=0;i<a.length;i++){
        if ( a[i].value == "") {
            throw "false"
          
         
        }
       
    }}catch(err){
        if(err=="false"){
            alert("Բոլոր տեքստային դաշտերը պիտի լինեն լրացված")
        }
    }
      }
      
