class Book
  attr_reader :title, :author, :genre, :pages

  @@all = []

  def initialize(title, author, genre, pages)
    @title = title
    @author = author
    @genre = genre
    @pages = pages

    @@all << self
  end

  def self.all
    @@all
  end

  def to_s
    "#{@title} by #{@author}"
  end
  
  def Book.size_of_library
      @@all.length
  end

  # look through all the books and find the
  # one that has the most pages
  def Book.longest_book
    most_pages = 0
    longest_book = nil

    @@all.each do |book|
      if book.pages > most_pages
        most_pages = book.pages
        longest_book = book
      end
    end

    longest_book
  end

  # go through all Book instances
  # and find out what author appears the most
  def Book.favorite_author
    tally = Hash.new
    @@all.each do |book|
      if tally[book.author] == nil
        # set it to 1 because this is the first time
        # we've seen this author.
        tally[book.author] = 1
      else
        # we've seen this author before so we increment
        tally[book.author] += 1
      end
    end

    most_tallies = 0
    most_tallied_author = nil
    tally.keys.each do |author_name|
      if tally[author_name] > most_tallies
        most_tallies = tally[author_name]
        most_tallied_author = author_name
      end
    end

    most_tallied_author
  end
end

