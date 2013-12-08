Wedding::Application.routes.draw do
  resources :invites
  
  get 'welcome'           => 'pages#welcome', :as => :welcome
  get 'our_story'         => 'pages#our_story', :as => :our_story
  get 'recommendations'   => 'pages#recommendations', :as => :recommendations
  get 'locations'         => 'pages#locations', :as => :locations  
  
  get 'registry' => redirect("http://google.com/"), :as => :registry
  get '*path' => 'invites#show'
  
  root 'pages#welcome'

end
