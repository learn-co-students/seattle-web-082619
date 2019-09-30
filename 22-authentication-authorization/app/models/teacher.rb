class Teacher < ApplicationRecord
  has_many :cohorts
  validates :email, uniqueness: true
  validates :username, presence: true
  # has_many :students, through: :cohorts
end
