require 'sinatra'
# require 'sinatra/reloader'

# class Application < Sinatra::Application
get '/' do
  erb :index
end

get '/home/?' do
  erb :home
end
# end