class UsersController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]

  def new
  end

  def create
    User.create(user_params)
  end
 
  private
 
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end