# create by running the command in your terminal
# rake db:create_migration NAME=create_your_table_name
class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :bio
      t.integer :favorite_number
    end
  end
end
