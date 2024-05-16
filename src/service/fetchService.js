export default {
    baseLink: 'https://gympro-7202d-default-rtdb.europe-west1.firebasedatabase.app/',

    get: async function (endPoint){
        const response = await fetch(this.baseLink + endPoint, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(response){
            const responseData = await response.json();
            return responseData    
        }else{
            console.log('error');
        }
    },
    post: async function (endPoint, body){
        const response = await fetch(this.baseLink + endPoint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({body})
        })
        if(response){
            const responseData = await response.json();
            return responseData    
        }else{
            console.log('error');
        }
    }
}