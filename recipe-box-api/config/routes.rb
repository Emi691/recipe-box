Rails.application.routes.draw do
  resources :ingredients, only: [:index, :show, :create, :update, :destroy]
  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  resources :auth, only: [:index, :show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
