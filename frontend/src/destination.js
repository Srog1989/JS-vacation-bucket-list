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
                    // console.log(newDestination)
                })
            )
    }



}