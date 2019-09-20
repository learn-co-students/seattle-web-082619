class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :ingredients
      t.integer :cook_time
      t.string :name

      t.timestamps
    end
  end
end
