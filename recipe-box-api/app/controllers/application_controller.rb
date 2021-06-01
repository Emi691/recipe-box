class ApplicationController < ActionController::API

    def encode_token(data)
        JWT.encode(data, 'secret')
    end
    
    def auth_header
        request.headers['Authorization']
    end

    def decode_token
        if auth_header
            token = auth_header.split(' ')[1]
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
            render json: { message: 'Please log in' }, status: :unauthorized
        end
    end
end
