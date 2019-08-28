class Bookshelf
  attr_reader :shelf

  def initialize
    @shelf = []
  end

  def add_book(book)
    @shelf << book
  end
end