json.extract! recipe, :id, :name, :ingredients, :cook_time, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
