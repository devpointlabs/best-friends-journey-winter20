class Api::UsersController < ApplicationController
    def update
        @user=User.find(params[:id])
        if @user.update(user_params)
            render json: @user
        else
            render json: { errors: @user.errors }, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
