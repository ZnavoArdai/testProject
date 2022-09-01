async function details() {

    let respo=await fetch('https://birds-api.amjed.me/birds')
    .then((response) => response)

    return respo.json()
}

details().then((res)=>{console.log(res)})



async function postdetails() {

    let Data={
        createdAt: `${dateOFfund.value}`,
        description: `${description.value}`,
        id: "1",
        name:`${nameOfBird.value}`,
        updatedAt: "2022-03-13T19:03:03.000Z",

    }

 fetch('https://birds-api.amjed.me/birds', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


