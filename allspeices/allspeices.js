let birdsarray=[];

let display=document.getElementById("displaySpeices")

async function speicesApi() {

  const respo=await fetch('https://birds-api.amjed.me/birds')
    
  birds=await respo.json()
  postSpeices(birds.data)
    
}

speicesApi()



function postSpeices(birds1){
let counterImg=1;
displaySpeices.innerHTML=""
  birds1.forEach(item => {
  
    displaySpeices.innerHTML+=` <div class="card col-md-2  col-sm-4  text-dark birdcontain shadow m-2" id="${item.name}" >
    <img src="/allspeices/allspicesImges/${counterImg++}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title birdsname ">${item.name}</h5>
      <a  class="btn btn-light info">🔎</a>
      <p class="card-text d-none info1">${item.description}</p>
    </div>
    <a  class="btn btn-sucsses btndelet mb-2">DELETE</a>
  </div>`


  if(counterImg==13){
    counterImg=1
}

});


   showDescription();
   deletBird();

}

function showDescription(){

   document.querySelectorAll('.info').forEach((element,i) =>{
  element.addEventListener('click', function(){
  document.querySelectorAll('.info1')[i].classList.toggle('d-block');
  console.log(document.querySelectorAll('.info1')[i].classList.toggle('d-none'));
  })


})
}


function serachByNameFunc(){


  serchbar.addEventListener("input",(e)=>{

    const serchString=e.target.value;
    console.log(serchString)
    let filtterbyname=birds.data.filter((names)=>{
        return names.name.toLowerCase().includes(serchString)
    })

console.log(filtterbyname)
postSpeices(filtterbyname)
    })
}
serachByNameFunc()



// createdAt: 
// description:  
// id: "1"
// name:  
// updatedAt:
   



function deletBird(){

  document.querySelectorAll('.btndelet').forEach((element,i) =>{
 element.addEventListener('click', function(){
 document.querySelectorAll('.birdcontain')[i].classList.toggle('d-none');
 })


})
}



onload=function loadinFunc(){
  displayloading.innerHTML='<img src="/home/homeimages/bird-flying.gif" alt="" style="width:100vw">'

setTimeout(()=>{


  displayloading.innerHTML=""

  displayloading.style.height="0px"

},3000)
}