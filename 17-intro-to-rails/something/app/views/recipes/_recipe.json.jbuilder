json.extract! recipe, :id, :ingredients, :cook_time, :name, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
