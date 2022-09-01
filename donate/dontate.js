



async function speicesApi() {

  const respo=await fetch('https://api.fbi.gov/wanted/v1/list')
    
  return respo.json()
    
}

speicesApi().then((res)=>{console.log(res.items);})



function postMembers(){
let counterImg=1;
speicesApi().then(res=>
    
    
    res.items.forEach(item => {
  
        displayMembers.innerHTML+=` <div class="card col-md-2  col-sm-6 text-dark birdcontain shadow m-2 donateContain" >
        <div class="card-body">
        <img src="https://randomuser.me/api/portraits/men/${counterImg++}.jpg">
          <h5 class="card-title birdsname "><b>Name :</b>${item.aliases}</h5>
          <p class="card-text "><b>FROM</b>:${item.place_of_birth}</p>
        </div>
      </div>
      
      
      `
    
    
     
    
    })
    
    )}
    postMembers()

function doante(){
  let btndonate=document.querySelectorAll(".Speicesbtn1");

  for (const i of btndonate) {
    

    i.addEventListener("click",()=>{

      inputDonate.placeholder=i.innerText
      inputDonate.value=i.innerText
    })
  }
}
doante()


function btnDonateFunc(){

  btndonateeId.addEventListener("click",()=>{

    btndonateeId.target="_blank"
    btndonateeId.href=`https://mail.google.com/mail/u/0/?fs=1&to=znavoardai@gmail.com&su=donate&body=i want to donate ${inputDonate.value}$&bcc=&tf=cm`;

  })
}
btnDonateFunc()
// place_of_birth
// aliases