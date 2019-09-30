class ApplicationController < ActionController::Base
  helper_method :logged_in?, :security
  #redirect the user to the login page
  def security
    if !logged_in?
      flash[:login_please] = "Please Exist"
      redirect_to login_path
    end
  end

  def logged_in?
    session[:teacher_id]
  end

  def current_user
    if logged_in?
      User.find(session[:teacher_id])
    end
  end
end
