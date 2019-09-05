class State < ActiveRecord::Base
  # queries for all existing states in the database and totals up the
  # sum of each of their populations
  def self.total_population
    populations = State.all.map do |state|
      state.population
    end
    populations.sum
  end
end