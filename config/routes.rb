Rails.application.routes.draw do

resources :bands, only: [:new, :create]
resource :session, only: [:new, :create, :destroy]

namespace :api, defaults: {format: :json} do
  resources :bands, only: [:create, :index, :show, :update, :destroy] do
    resources :songs, only: [:create, :index, :show, :update, :destroy]
    resources :albums, only: [:create, :index, :show, :update, :destroy]
    resources :videos, only: [:create, :index, :show, :update, :destroy]
    resources :gigs, only: [:create, :index, :show, :update, :destroy]
    resources :images, only: [:create, :index, :show, :update, :destroy]
    resources :press_items, only: [:create, :index, :show, :update, :destroy]
    end
  end

  root :to => "static_pages#root"

end
