const apiService = new ApiService()
// const apiService = `http://localhost:3000`


document.addEventListener('DOMContentLoaded', function(){
    console.log("hello")
    Destination.generateDestinations()

    const userLogin = document.getElementById("new-user-form")

    userLogin.addEventListener("submit", function(e){
        e.preventDefault()
        const userName = e.target.username.value
        User.generateUser(userName)
        
    })
})  