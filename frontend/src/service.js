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

    fetchUser(){
        return fetch(`${this.baseUrl}/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            }
        })
        .them(res => res.json())
    }
}