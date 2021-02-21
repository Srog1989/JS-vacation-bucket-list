class Destination {
    static allDestinations = []
    
    constructor(destination){
        this.id = destination.id
        this.city = destination.city
        this.country = destination.country
        this.importance = destination.importance
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

         renderUserDestinations(){
            const list = document.querySelector(".destinations-container")
                this.destinations.forEach(destination =>{
                    const div = document.createElement("div")
                    const h2 = document.createElement("h2")
                    const h3 = document.createElement("h3")
                    const h4 = document.createElement("h4")
                    const p = document.createElement("p")
                    div.setAttribute("class", "card")
                    div.setAttribute("data-id", destination.id)
                    h3.innerHTML = destination.city
                    h4.innerHTML = `Country: ${destination.country}`
                    p.innerHTML = `Importance: ${destination.importance}`
                    div.appendChild(h3)
                    div.appendChild(h4)
                    div.appendChild(p)
                    list.appendChild(div)
                })

    }
}