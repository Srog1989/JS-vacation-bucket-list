const apiService = new ApiService()

document.addEventListener('DOMContentLoaded', function(){
    Destination.generateDestinations()

    const userLogin = document.getElementById("new-user-form")

    userLogin.addEventListener("submit", function(e){
        e.preventDefault()
        const userName = e.target.username.value
        User.generateUser(userName)  
    })

})  