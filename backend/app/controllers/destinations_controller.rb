class DestinationsController < ApplicationController
    def index 
        destinations =Destination.all
        render json: destinations
    end 

    def create
        destination = Destination.create(destination_params)
        render json: destination
    end

    def destroy
        destination = Destination.find(params[:id])
        destination.destroy
    end

    private

    def destination_params
        params.require(:destination).permit(:city, :country, :importance, :user_id)
    end
end