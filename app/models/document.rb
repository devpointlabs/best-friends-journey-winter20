class Document < ApplicationRecord
  belongs_to :pet
  validates :title, :description, :picture, presence: true 
end
