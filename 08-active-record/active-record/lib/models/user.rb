class User < ActiveRecord::Base
  def say_my_favorite_number
    "My name is #{username} and my favorite number is #{favorite_number}"
  end
end