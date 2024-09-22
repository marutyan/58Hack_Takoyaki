Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  # root "posts#index"

  resources :posts, only: [:index, :new, :create, :edit, :update, :destroy] do
    resources :favorites, only: [:create, :destroy]
    collection do
      get 'category_counts' 
      get 'age_counts'
    end
 end
  resources :login, only: [:index] # ここを追記します

  root 'login#index' # ここを追記します
  get 'login/index' # 自動で設定されたルーティング

  get 'my_posts', to: 'posts#my_posts', as: 'my_posts'

  post "/login", to: "login#create"

  post "/sign_up", to: "sign_up#create"
end
