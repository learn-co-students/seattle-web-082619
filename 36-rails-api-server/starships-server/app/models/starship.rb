class Starship < ApplicationRecord
  has_many :crew_members

  def foo
    99
  end
end
