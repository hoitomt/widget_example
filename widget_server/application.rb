require 'sinatra'

get '/' do
  erb :index
end

get '/home' do
  erb :home
end

get '/widget.?:format?' do
  @pass_me = "Server Param"
  content_type 'text/javascript'
  erb :'widget.js'
end