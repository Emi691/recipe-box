class User < ApplicationRecord
    has_secure_password
    has_many :recipes

    validates :username, :email, presence: true
    validates :username, :email, uniqueness: true 
end
