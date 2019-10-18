# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Starship.destroy_all
CrewMember.destroy_all

enterprise = Starship.create(name: "Enterprise", registration: "NCC-1701")
enterprise_d = Starship.create(name: "Enterprise D", registration: "NCC-1701-D")
voyager = Starship.create(name: "Voyager", registration: "NCC-27456")

CrewMember.create(name: "James T. Kirk", starship: enterprise)
CrewMember.create(name: "Jean Luc Picard", starship: enterprise_d)
CrewMember.create(name: "Kathryn Janeway", starship: voyager)