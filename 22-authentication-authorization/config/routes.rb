Rails.application.routes.draw do
  resources :teachers
  resources :students, only: [:show, :new, :index, :create]
  get '/login', to: "auth#login", as: "login"
  post '/login', to: "auth#verify"
  get '/logout', to: "auth#logout", as: "logout"
  root 'students#index'
end
