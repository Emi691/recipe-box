class User < ApplicationRecord
    has_secure_password
    has_many :recipes

    validates :username, :email, :password, presence: true
    validates :username, :email, :password, uniqueness: true 
end
