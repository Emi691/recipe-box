class Recipe < ApplicationRecord
    belongs_to :user
    has_many :ingredients, dependent: :destroy

    validates :title, :instructions, presence: true

    accepts_nested_attributes_for :ingredients
end
