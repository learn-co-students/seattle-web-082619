class BooksController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

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

  get '/books/new' do
    #we are not getting any data from out model
    erb :new
  end

  post '/books' do
    # byebug
    book = Book.new(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
    if book.save
      redirect to "/books/#{book.id}"
    else
      redirect to "/books/new"
    end
  end

  # show page
  get '/books/:id' do
    # binding.pry
    @book = Book.find(params[:id])
    erb :show
  end

  get '/books/:id/edit' do
    # Model
      @book = Book.find(params[:id])
      erb :edit
    # View
  end

  patch '/books/:id' do
    # byebug
    @book = Book.find(params[:id])
    @book.update(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
    redirect to "/books/#{@book.id}"
  end

  delete '/books/:id' do
    # byebug
    @book = Book.find(params[:id])
    @book.delete
    redirect to "/books"
  end

end
