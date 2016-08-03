Rails.application.routes.draw do

  root      'home#index'

  resources :comments
  devise_for :users

  get 'about'   =>  'home#about'
  get 'contact' =>  'home#contact'

end
