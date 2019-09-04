class Game
  def Game.run
    puts "Welcome to guessing game"
  end

  def Game.menu
    is_running? = true
    while is_running?
      puts "What would you like to do?"
      puts "1. Play game"
      puts "2. View High Scores"
      puts "3. Exit"

      choice = STDIN.gets.chomp
      if choice == "1"
        self.play
      elsif choice == "2"
        self.view_high_scores
      elsif choice == "3"
        is_running = false
      else
        puts "Sorry, your choice is not recognizable."
      end
    end
  end

  def Game.play
    game = GuessingGame.new
    while !game.is_game_over
      guess = STDIN.gets.chomp
      result = game.make_guess(guess)

      if result == "correct"
        puts "Correct! The number was #{guess}"
      else
        puts "Keep trying. The number is #{result}"
      end
    end

    puts "Would you like to save your score? (y/n)"
    choice = STDNIN.gets.chomp
    if choice.downcase[0] == "y"
      puts "Enter your name:"
      name = STDIN.gets.chomp
      self.submit_high_score(name, game.guesses)
    end
  end

  def view_high_scores
  end

  def submit_high_score(player_name, score)
    puts "submitting #{score} for #{player_name}"
  end
end