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
                                    <h1>Do it! Go see the World!</h3>
                                </div>
                            `
    }

    renderUserDestinations(){
        const destinationCard = document.querySelector(".destinations-container")
            this.destinations.forEach(destination =>{
                const div = document.createElement("div")
                const h2 = document.createElement("h2")
                const h3 = document.createElement("h3")
                const h4 = document.createElement("h4")

                div.setAttribute("class", "card")
                div.setAttribute("data-id", destination.id)

                h2.innerHTML = destination.city
                h3.innerHTML = `Country: ${destination.country}`
                h4.innerHTML = `Importance: ${destination.importance}`

                div.appendChild(h2)
                div.appendChild(h3)
                div.appendChild(h4)
                destinationCard.appendChild(div)
            })
            Destination.destinationEvents(this.id)

    }


}