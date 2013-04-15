#Widget Example
This repo contains two separate sinatra projects

  1. Widget server - This will run the widget server on port 3030
  2. Widget consumer - This will run the consumer on port 5001

The widget server will serve a 3rd party javascript widget to the widget consumer when visiting the /home path on the consumer

#Run the example
The following commands will install the necessary gems (sinatra, foreman, and shotgun) and start up both servers.

    bundle install
    foreman start