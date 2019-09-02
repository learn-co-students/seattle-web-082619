require 'pry'
require_relative "lib/FlightCrew.rb"
require_relative "lib/Passenger.rb"
require_relative "lib/Trip.rb"

FC1 = FlightCrew.new(7, 'Delta', 'Bill')
FC2 = FlightCrew.new(8, 'Alaska', 'Sarah')

p1 = Passenger.new('David', 35, 'chill')
p2 = Passenger.new('Kara', 22, 'frantic')
p3 = Passenger.new('Ellie', 1, 'sleepy')

t1 = Trip.new(FC1, p1, 'Montana', 500)
t2 = Trip.new(FC2, p2, 'Iceland', 2500)
t3 = Trip.new(FC1, p2, 'San Diego', 600)
t4 = Trip.new(FC2, p1, 'Montana', 1000)
t5 = Trip.new(FC1, p1, 'Aspen', 700)
t56 = Trip.new(FC1, p3, 'Aspen', 700)

binding.pry
0
