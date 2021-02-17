class UsersController < ApplicationController
    def index
        
    end

    def create

    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end
end