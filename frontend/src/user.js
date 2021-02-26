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
                    newUser.renderUserShowPage()
                    newUser.renderUserDestinations()
                    Destination.destinationEvents(newUser.id)
                })
    }

    renderUserShowPage(){
        const userDestination = document.querySelector(".container")
        userDestination.innerHTML = 
                            `
                                <div class= "new-destination-form">
                                <form class ="new-destination-form">
                                    <h1> Where Will Life Take You?</h1>
                                    <input
                                        type="text"
                                        name="city"
                                        value=""
                                        placeholder="City"
                                        class="input-text"
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        name="country"
                                        value=""
                                        placeholder="Country"
                                        class="input-text"
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        name="importance"
                                        value=""
                                        placeholder="Enter 1-5 how important it is"
                                        class="input-text"
                                    />
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="Create Destination"
                                        class="submit"
                                    />
                                </form>
                                </div>
                                <div id="destinations-container" class="destinations-container">
                                    <h1>Your bucket list!</h3>
                                </div>
                            `
    }

    renderUserDestinations(){
        this.destinations.forEach(destination =>{
            Destination.renderDestination(destination)
        })
    }


}