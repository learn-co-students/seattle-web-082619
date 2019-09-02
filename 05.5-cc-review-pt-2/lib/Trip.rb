#class for Model2 goes here
#Feel free to change the name of the class
class Trip
  attr_reader :flight_crew, :passenger, :destination, :distance_travelled

  @@all = []

  def initialize(flight_crew, passenger, destination, distance_travelled)
    @flight_crew = flight_crew
    @passenger = passenger
    @destination = destination
    @distance_travelled = distance_travelled
    @@all << self
  end

  def self.all
    @@all
  end

  def hit_turbulence
    self.passenger.anxiety_level = 'suspicious'
  end

end
