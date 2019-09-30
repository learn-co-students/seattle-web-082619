class TeachersController < ApplicationController
  def new
    @teacher = Teacher.new
  end

  def create
    # byebug
    @teacher = Teacher.new(set_params)
    if @teacher.save
      redirect_to students_path
    else
      flash[:message] = "Some details are wrong. Fix It"
      render :new
    end
  end

  private
  def set_params
    params.require(:teacher).permit(:username,:email)
  end
end
