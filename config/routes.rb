Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/courses', to: 'courses#index'
  get '/courses/:id', to: 'courses#show'
  post '/courses', to: 'courses#create'
  delete '/courses/:id', to: 'courses#delete'
  put '/courses/:id', to: 'courses#update'
end
