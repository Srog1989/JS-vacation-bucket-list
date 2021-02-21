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
                })
    }

    renderUserShowPage(){
        const userDestination = document.querySelector(".container")
        userDestination.innerHTML = 
                                `
                                <form class="new-destination-form">
                                    <h1> Where Will Life Take You?</h1>
                                    <input
                                        type="text"
                                        name="City"
                                        value=""
                                        placeholder="City"
                                        class="input-text"
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        name="Country"
                                        value=""
                                        placeholder="Country"
                                        class="input-text"
                                    />
                                    <br />
                                    <input
                                        type="text"
                                        name="Importance"
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
                                <div id="destinations-container" class="destinations-container">
                                    <h1>Do it! Go see the World!</h3>
                                </div>
                            `
    }


}