class User {
    static allUsers = []
    
    constructor(user){
        this.id = user.id
        this.name = user.name
        this.destinations = user.destinations
        User.allUsers.push(this)
    }

    static generateUser(userName) {
        apiService.fetchUser(userName)
            .then(userdata => 
                    {
                    const newUser = new User(userdata)
                    console.log(newUser)
                })
    }
}