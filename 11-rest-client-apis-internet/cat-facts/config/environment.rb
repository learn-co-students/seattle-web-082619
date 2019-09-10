require 'bundler'
Bundler.require

# We don't need to manually require
# these because bundler will read them
# from the Gemfile and import them.
# require 'pry'
# require 'json'
# require 'rest-client'

require_all 'bin'