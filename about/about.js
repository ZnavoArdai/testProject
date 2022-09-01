async function employes() {

    const respo=await fetch('https://newsapi.org/v2/everything?q=apple&from=2022-07-24&to=2022-07-24&sortBy=popularity&apiKey=791172318b7a4bfe82231c1df6a312a2')
      
return respo.json()
      
  }
  
  employes().then(res=>{console.log(res);})



  onload=function postEmployes(){
    employes().then(res=>{


console.log(res.articles[1].author);
            employesDisplay.innerHTML= `<div class="card-group w-75">
            <div class="card">
            <img class="card-img-top" src="https://randomuser.me/api/portraits/women/20.jpg">
            <div class="card-body">
                <h5 class="card-title">${res.articles[1].author}</h5>
                <p class="card-text">${res.articles[1].description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">barbara@gmail.com</small>
              </div>
            </div>
            <div class="card m-2">
            <img class="card-img-top" src="https://randomuser.me/api/portraits/women/86.jpg">
            <div class="card-body">
                <h5 class="card-title">${res.articles[2].author}</h5>
                <p class="card-text">${res.articles[14].description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">amelia@gmail.com</small>
              </div>
            </div>
            <div class="card">
            <img class="card-img-top" src="https://randomuser.me/api/portraits/men/20.jpg">
            <div class="card-body">
                <h5 class="card-title">${res.articles[3].author}</h5>
                <p class="card-text">${res.articles[7].description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">igor@gmail.com</small>
              </div>
            </div>
          </div>
          
         
       
          `
        });



  }