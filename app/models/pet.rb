class Pet < ApplicationRecord
  belongs_to :user
  has_many :notes
  has_many :documents
  has_many :insurances
end
