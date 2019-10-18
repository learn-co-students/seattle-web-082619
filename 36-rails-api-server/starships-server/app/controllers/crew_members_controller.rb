class CrewMembersController < ApplicationController
  def index
    render json: Starship.all
  end

  def create
    puts params
    puts "name: #{params[:name]} ship_id: #{params[:starship_id]}"
    person = CrewMember.create(name: params[:name], starship_id: params[:starship_id])
    render json: person
  end
end
