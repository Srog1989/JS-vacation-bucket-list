# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


sarah = User.create(name: "Sarah")
jordan = User.create(name: "Jordan")
mackenzie = User.create(name: "Mackenzie")

destination = sarah.destinations.build(city: "Dublin", country: "Ireland", importance: 3 )
destination.save
vacation = jordan.destinations.build(city: "Rome", country: "Italy", importance: 4 )
vacation.save
location = mackenzie.destinations.build(city: "Paris", country: "France", importance: 5)
location.save

