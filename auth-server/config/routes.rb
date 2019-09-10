Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'sessions#new'
  get '/secret', to: 'secrets#index'
  post '/signin', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  resource :users
end