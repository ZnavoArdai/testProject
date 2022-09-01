export async function details() {

    let respo=await fetch('https://birds-api.amjed.me/birds')
    .then((response) => response)

    return respo.json()
    
    
}



