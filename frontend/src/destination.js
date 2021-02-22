class Destination {
    static allDestinations = []
    
    constructor(destination){
        this.id = destination.id
        this.city = destination.city
        this.country = destination.country
        this.importance = destination.importance
        this.userId = destination.user_id
        Destination.allDestinations.push(this)
    }

    static generateDestinations() {
        apiService.fetchDestinations()
            .then(data => 
                data.forEach(destination => {
                    const newDestination = new Destination(destination)
                    Destination.renderDestinations(destination)
                })
            )
    }

    static renderDestinations(destination) {
        const ul = document.querySelector("#List-of-Destinations")
            const li = document.createElement("li")
            li.innerHTML = destination.city
            ul.appendChild(li)
         }

    static destinationEvents(userId){
        let destinationEvent = document.querySelector(".new-destination-form")
        destinationEvent.addEventListener("submit", function(e){
            e.preventDefault()
            const dCity = e.target.city.value
            const dCountry = e.target.country.value
            const dImportance = e.target.importance.value
            Destination.createDestination(dCity, dCountry, dImportance, userId)
        })
    }

    static createDestination(dCity, dCountry, dImportance, userId) {
        apiService.fetchCreateDestination(dCity, dCountry, dImportance, userId)
            .then(destinationData => 
                {
                    const newDestination = new Destination(destinationData)
                    // Destination.renderDestinations(newDestination)
                    console.log(newDestination)
                })
            
    }



}