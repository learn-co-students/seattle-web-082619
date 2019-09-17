class BooksController < Sinatra::Base
  set :views, 'app/views'

  get '/' do
    "Hello World"
  end

  # index page
  get '/books' do
    #model
    @books = Book.all
    # telling it where to go
    erb :index
  end

  # show page
  get '/books/:id' do
    # binding.pry
    @book = Book.find( params[:id])
    erb :show
  end
end
