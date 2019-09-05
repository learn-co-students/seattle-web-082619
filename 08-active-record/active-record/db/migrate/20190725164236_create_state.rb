# create by running the command in your terminal
# rake db:create_migration NAME=create_your_table_name
class CreateState < ActiveRecord::Migration[5.2]
  def change
    create_table :states do |t|
      t.string :name
      t.integer :population
    end
  end
end
