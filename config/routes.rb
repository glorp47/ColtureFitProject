Rails.application.routes.draw do

resources :bands, only: [:new, :create]
resource :session, only: [:new, :create, :destroy]

namespace :api, defaults: {format: :json} do
  resources :bands, only: [:create, :index, :show, :update, :destroy] do
    resources :songs, only: [:index]
    resources :albums, only: [:index]
    resources :videos, only: [:index]
    resources :gigs, only: [:index]
    resources :images, only: [:index]
    resources :press_items, only: [:index]
    end
  resources :songs, only: [:create, :show, :update, :destroy]
  resources :albums, only: [:create, :show, :update, :destroy]
  resources :videos, only: [:create, :show, :update, :destroy]
  resources :gigs, only: [:create, :show, :update, :destroy]
  resources :images, only: [:create, :show, :update, :destroy]
  resources :press_items, only: [:create, :show, :update, :destroy]
  end

  root :to => "static_pages#root"

end
