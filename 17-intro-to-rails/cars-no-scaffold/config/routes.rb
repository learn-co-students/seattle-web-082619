Rails.application.routes.draw do
  resources :puppies
  resources :drivers
  get '/cars', to: 'cars#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
