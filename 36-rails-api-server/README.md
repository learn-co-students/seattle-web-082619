# Rails API Server

* `rails new starships-server`
* `cd starships-server`
* `rails g resource starship name registration`
* `rails g resource crew_member name starship:references`


* `rails db:create`
* `rails db:migrate`
* `rails db:seed`


* `rails s`
* `rails c`

Add `gem 'active_model_serializers'` to your Gemfile then run bundle install.

* `bundle install`
* `rails g serializer starship`
* `rails g serializer crew_member`
