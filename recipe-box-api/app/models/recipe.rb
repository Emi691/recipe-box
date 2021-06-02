class Recipe < ApplicationRecord
    belongs_to :user
    has_many :ingredients

    validates :title, :instructions, presence: true
end
