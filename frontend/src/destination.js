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
                    Destination.renderDestinationList(newDestination)
                })
            )
    }

    static renderDestinationList(destination) {
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
                    Destination.renderDestination(newDestination)
                })
            
    }

    
    static renderDestination(destination) {
        const destinationContainer = document.querySelector(".destinations-container")
        const div = document.createElement("div")
        const h2 = document.createElement("h2")
        const h3 = document.createElement("h3")
        const h4 = document.createElement("h4")
        const button = document.createElement("button")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", destination.id)
        button.setAttribute("class", "delete-destination")
        button.setAttribute("data-destination-id", destination.id)

        h2.innerHTML = destination.city
        h3.innerHTML = `Country: ${destination.country}`
        h4.innerHTML = `Importance: ${destination.importance}`
        button.innerHTML = "Traveled"


        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(button)
        destinationContainer.appendChild(div)
        this.traveled(button)
    }

    static traveled(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            apiService.fetchDeleteDestination(e.target.dataset.destinationId)
            e.target.parentElement.remove();
        })
    }



}