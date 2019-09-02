#class for Model1 goes here
#Feel free to change the name of the class
class FlightCrew
  attr_reader :crew_size, :company, :captain_name

  @@all = []

  def initialize(crew_size, company, captain_name)
    @crew_size = crew_size
    @company = company
    @captain_name = captain_name
    @@all << self
  end

  def self.all
    @@all
  end

  def trips
    Trip.all.select do |trip|
      trip.flight_crew == self
    end
  end

  def passengers
    self.trips.map do |trip|
      trip.passenger
    end
  end

  def distance_travelled
    # total_distance = self.trips.map do |trip|
    #   trip.distance_travelled
    # end
    # total_distance.sum
    # self.trips.reduce(0) do |sum, n|
    #   sum + n.distance_travelled
    # end
    total_distance = 0
    self.trips.each do |trip|
      total_distance += trip.distance_travelled
    end
    total_distance
  end

  def self.total_crew_distance
    # total = Trip.all.map do |trip|
    #   trip.distance_travelled
    # end
    # total.sum
    total = 0
    self.all.each do |crew|
      total += crew.distance_travelled
    end
    total
  end

  def serve_wine
    self.passengers.each do |passenger|
      if passenger.is_21?
        passenger.anxiety_level = 'better'
      end
    end
  end

end
