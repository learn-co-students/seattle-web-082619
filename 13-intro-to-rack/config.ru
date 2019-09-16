# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each
require 'pry'

class App
  def call(environment_hash)
    # binding.pry
    req = Rack::Request.new(environment_hash)
    response = Rack::Response.new
    locations = ["seattle", "denver", "austin", "dc" ]
    # binding.pry
    if req.path === "/"
      response.write("Welcome to Flatiron School!")
    elsif locations.include?(req.path.split("/").last)
      response.write("Welcome to #{req.path.split("/").last.capitalize}")
    else
      response.write(" There is no location there yet!")
    end
    response.finish
    # [200, {"Content-Type" => "text/html"}, [body]]
  end
end

run App.new
