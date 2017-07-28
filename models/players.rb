class Players
    include MongoMapper::Document

    key :name, String
    key :email, String
    key :is_admin, Boolean
    key :rating, Integer
    key :games_played, Integer
    key :pro, Boolean
    
end