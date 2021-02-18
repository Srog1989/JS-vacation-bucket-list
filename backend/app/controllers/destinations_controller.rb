class DestinationsController < ApplicationController
    def index 
        destinations =Destination.all
        render json: destinations
    end 

    def create
        # user = User.find(params[:user_id])
        # destination = user.destinations.build({
        #     nickname:Faker::Name.first_name,
        #     species:Faker::Games::Pokemon.name
        # })
        # render json: pokemon.save ? pokemon : {message: pokemon.errors.messages[:team_max][0]}  
    end

    def destroy
        destination = Destination.find(params[:id])
        destination.destroy
    end
end