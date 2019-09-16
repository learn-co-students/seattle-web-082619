```ruby
 require 'rack'
 require 'pry'
 require 'shotgun'

class App
  def call(env_hash)
    req = Rack::Request.new(env_hash)
    resp = Rack::Response.new
    target_location = req.path.split("/").last
    if req.path == "/"
      resp.write("Welcome to Flatiron School")
    elsif req.path == "/#{target_location}"
      resp.write("Welcome to the #{target_location} Campus")
    else
      resp.status = 400

    end
    resp.finish
  end
end

run App.new
```



```Ruby
# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

require 'rack'
require 'pry'

class App
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    http_code = 200
    headers = {"Content-Type" =>  "text/html"}
    body = ["Hello World!"]
    locations = ["seattle", "denver", "DC"]
    path = req.path.split("/").last
    if req.path == "/"
      resp.write("Welcome to Flatiron School")
    elsif locations.include?(path)
      resp.write("Welcome to Flatiron Schoool #{path.capitalize}!")
    else
      resp.write("We do not have a location open there yet.")
    end
    resp.finish
    # binding.pry
    # [http_code, headers, body]
  end
end

run App.new

```
