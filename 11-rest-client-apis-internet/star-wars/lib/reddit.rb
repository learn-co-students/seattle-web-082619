
class RedditCLI
    def self.run
      puts "what subreddit do you want to see?"
      subreddit = STDIN.gets.chomp
      url = "https://www.reddit.com/r/#{subreddit}.json"

      response = get_json(url)
      posts = response["data"]["children"]
      titles = posts.map do |post|
        post["data"]["title"]
      end

      titles.each do |title|
        puts title
      end
    end

    def self.get_json(url)
        puts "getting url: #{url}"
        response = RestClient.get(url)
        json = JSON.parse(response.body)
    end
end