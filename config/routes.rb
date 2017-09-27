Rails.application.routes.draw do
  get 'dashboard' , :to => 'dashboard#index'
  #to : 'dashboard#index'
  resources :quotes, :categories, :photos
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get '/dashboard/getQuotes', :to => 'dashboard#getQuotes'
end
