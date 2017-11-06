require 'rubygems'
require 'sinatra'
require 'json'
require 'mongo'


configure do
    db = Mongo::Client.new('mongodb://127.0.0.1:27017/pong-elo')
    set :mongo_db, db[:pong_elo]
end

# Templates for user interface
get '/' do
    erb :index
end

# Players API routes
get '/api/v1/players/:player_id?' do
    content_type :json

    players = settings.mongo_db.database.collection('players')

    if params['player_id'].nil? || params['player_id'].empty?
        all_players = []
        
        players.find().each { |player| all_players.push(player) }

        if players.nil?
            {"error": "No players found."}.to_json
        else
            all_players.to_json
        end

    else
        begin
            single_player = players.find( :_id => BSON::ObjectId(params["player_id"])).first

            if single_player.nil?
                status 404
                {"error": "No players found."}.to_json
            else
                single_player.to_json
            end
        rescue BSON::ObjectId::Invalid
            status 400
            {"error": "Invalid player ID."}.to_json
        end
    end
end

post '/api/v1/players' do
    content_type :json
end

put '/api/v1/players/:player_id?' do
    content_type :json
end

delete 'api/v1/players/:player_id' do
    # Admin
    content_type :json
end

# Matches API routes
get '/api/v1/matches/:match_id?' do
    content_type :json
end

post '/api/v1/matches' do
    content_type :json
end

put '/api/v1/matches/:match_id?' do
    content_type :json
end

delete '/api/v1/matches/:match_id' do
    content_type :json
end