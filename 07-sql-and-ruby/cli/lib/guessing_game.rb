class GuessingGame
  attr_reader :is_game_over, :guesses

  MIN = 1
  MAX = 100

  def initialize
    @guesses = 0
    @is_game_over = false

    # add MIN because rand() might return 0
    @number = rand(MAX - 1) + MIN
  end

  def make_guess(guess)
    if @is_game_over
      return # do nothing
    end

    @guesses += 1
    if guess == @number
      @is_game_over = true
      return "correct"
    elsif guess < @number
      return "higher"
    elsif guess > @number
      return "lower"
    end
  end
end