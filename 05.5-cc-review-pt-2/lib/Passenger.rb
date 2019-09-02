#class for Model3 goes here
#Feel free to change the name of the class
class Passenger
  attr_reader :name, :age
  attr_accessor :anxiety_level

  @@all = []

  def initialize(name, age, anxiety_level='neutral')
    @name = name
    @age = age
    @anxiety_level = anxiety_level
    @@all << self
  end

  def self.all
    @@all
  end

  def trips
    Trip.all.filter do |trip|
      trip.passenger == self
    end
  end

  def flight_crew
    self.trips.collect do |trip|
      trip.flight_crew
    end
  end

  def unique_destinations
    destinations = self.trips.collect do |trip|
      trip.destination
    end
    destinations.uniq
  end

  def is_21?
    self.age >= 21
  end
end
