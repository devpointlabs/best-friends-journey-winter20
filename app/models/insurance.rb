class Insurance < ApplicationRecord
  belongs_to :pet

  validates :nombre, :phone, :policy, presence: true 
  validates :phone, numericality: true
end
