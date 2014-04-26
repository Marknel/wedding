Wedding::Application.routes.draw do
  resources :messages

  resources :invites
  
  get 'welcome'           => 'pages#welcome', :as => :welcome
  get 'recommendations'   => 'pages#recommendations', :as => :recommendations
  get 'locations'         => 'pages#locations', :as => :locations
  get 'schedule'         => 'pages#schedule', :as => :schedule
  
  get 'registry' => redirect("https://www.notanothertoaster.com/natv3/login.jsp?username=UTRIRA&password=712542"), :as => :registry
  get '*path' => 'invites#show'
  
  root 'pages#welcome'

end
