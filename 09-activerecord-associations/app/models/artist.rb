class Artist < ActiveRecord::Base
  has_many :albums
  has_many :record_labels, through: :albums

  def self.oldest_artist
    self.all.max_by{|artist| artist.age}
  end
end