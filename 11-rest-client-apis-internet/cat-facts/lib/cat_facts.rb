CATS_API = "https://cat-fact.herokuapp.com/facts"

class CatFactsCLI
    def self.run
      response = get_json(CATS_API)
      fact = response["all"].sample["text"]
      puts fact
    end

    def self.get_json(url)
        puts "getting url: #{url}"
        response = RestClient.get(url)
        json = JSON.parse(response.body)
    end
end