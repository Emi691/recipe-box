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
end
