class ApiService {
    constructor(){
        this.baseUrl = `http://localhost:3000/`
    }

     fetchDestinations(){
        return fetch(`${this.baseUrl}/destinations`, {
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
    }

    fetchUser(userName){
        return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: userName
            })
        })
        .then(res => res.json())
    }


}