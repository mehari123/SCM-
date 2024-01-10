

const btn=document.getElementById("Btn");

const email=document.getElementById("emailEntered");

btn.addEventListener('click',e=>{
   e.preventDefault();

   dealwithEmail();

});


function dealwithEmail(){
  const emailValue= email.value;

  const keys=Object.keys(localStorage);
    const change = keys.includes(emailValue);
  if(change && emailValue.length!=0 && emailValue!="") {
       showprofile();
       }

}


 const showprofile = ()=> {

          const emailValue= email.value;

          const dataobj=JSON.parse( localStorage.getItem(emailValue));

          document.getElementById("fullname").innerText=dataobj.fname+" "+ dataobj.lname;
          // document.getElementById("photo").src="C:\Users\hp\Picturesp.pgn";
          document.getElementById("email").innerText=dataobj.email;
          document.getElementById("phonenum").innerText=dataobj.phonenumber;
          document.getElementById("bdate").innerText="12/27/2001";
          document.getElementById("job").innerText=dataobj.job;
          document.getElementById("gender").innerText=dataobj.gender;
          const container = document.getElementById('cont');
          const showProfile = document.getElementById('show');
          container.style.cssText = `
          display: block;
          visibility:visible;
          `;
          showProfile.style.cssText = `
          display: none;
          visibility:hidden;
          `;



};
