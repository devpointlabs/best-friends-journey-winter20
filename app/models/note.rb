class Note < ApplicationRecord
  belongs_to :pet
  validates :title, :body, presence: true 
end
