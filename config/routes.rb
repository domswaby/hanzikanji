Rails.application.routes.draw do

  root 'pages#index'

  namespace :api do
    namespace :v1 do

      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  get 'api/v1/kanjis/page/:num' => 'api/v1/kanjis#page'
  get 'api/v1/kanjis/search/:type/:target' => 'api/v1/kanjis#search'
  get 'api/v1/kanjis' => 'api/v1/kanjis#index'
  get 'api/v1/hanzis/page/:num' => 'api/v1/hanzis#page'
  get 'api/v1/hanzis/search/:type/:target' => 'api/v1/hanzis#search'
  get 'api/v1/hanzis' => 'api/v1/hanzis#index'
  get '*path', to: 'pages#index', via: :all


end
