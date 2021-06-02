class AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    def create
        @user = User.find_by(username: login_params[:username])
        if @user && @user.authenticate(login_params[:password])
            token = encode_token({ user_id: @user.id })
            render json: { user: UserSerialiazer.new(@user), jwt: token }, status: :log_in_successful
        else
            render json: { message: 'Your username or password is incorrect' }, status: :log_in_failed
        end
    end

    private
    
    def login_params
        params.require(:user).permit(:username, :password)
    end
end