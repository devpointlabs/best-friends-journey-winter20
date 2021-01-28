class Pet < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  has_many :documents, dependent: :destroy
  has_many :insurances, dependent: :destroy
end
