class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        
        user = User.find_by(name: params[:name])
        if user
            render json: user, include: [:destinations]
            # binding.pry
        else
            newUser = User.create(name: params[:name])
            render json: newUser, include: [:destinations]
            
        end
    end

    def destroy
        # user = User.find(params[:id])
        # user.destroy
    end
end