class User < ApplicationRecord
    cattr_accessor :current_user
    has_secure_password
    has_many :commands

end
