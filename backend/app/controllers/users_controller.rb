class UsersController < ApplicationController
  
    def create
        user = User.find_by(name: params[:name])
        if user
            render json: user, include: [:destinations]
        else
            newUser = User.create(name: params[:name])
            render json: newUser, include: [:destinations]
        end
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end