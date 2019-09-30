class AuthController < ApplicationController
  def login
  end

  def verify
    # byebug
    @teacher = Teacher.find_by(username: params[:username])
    #Initialize an auth_token
    session[:teacher_id] = @teacher.id
    if @teacher && @teacher.email == params[:email]
        redirect_to students_path
    else
      flash[:message] = "Yo, You don't exist"
      render :login
    end
  end

  def logout
    session.clear
    redirect_to login_path
  end
end
