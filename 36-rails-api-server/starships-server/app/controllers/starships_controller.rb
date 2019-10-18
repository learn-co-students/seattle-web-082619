class StarshipsController < ApplicationController
  def index
    render json: Starship.all
  end
end
