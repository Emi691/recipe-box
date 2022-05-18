class ApplicationController < ActionController::API
    before_action :authorized

    def encode_token(data)
        JWT.encode(data, 'secret')
    end
    
    def get_auth_header
        request.headers['Authorization']
    end

    def decode_token
        if get_auth_header
            token = get_auth_header
            begin
                JWT.decode(token, 'secret')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user
        if decode_token
            user_id = decode_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        if !logged_in?
            render json: { message: 'Please log in to view this page' }, status: :unauthorized
        end
    end
end
