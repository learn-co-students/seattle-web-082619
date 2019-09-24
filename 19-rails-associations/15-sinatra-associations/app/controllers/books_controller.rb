class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, ]
  #root
  get '/' do
    "Hello World"
  end

  #index
  get '/books' do
    @books = Book.all
    erb :'/books/index'
  end

  get '/books/new' do
    @authors = Author.all
    erb :'/books/new'
  end

  #show
  get '/books/:id' do
    # byebug
    # set_book
    erb :'/books/show'
  end

  get '/books/:id/edit' do
    set_book
    erb :'/books/edit'
  end

  post '/books' do
    # byebug
    @book = Book.new(title: params[:title], author_id: params[:author_id], snippet: params[:snippet])
    @book.save
    redirect "/books/#{@book.id}"
  end

  patch '/books/:id' do
    # byebug
    set_book
    @book.update(title: params[:title], author: params[:author], snippet: params[:snippet])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    # byebug
    set_book
    @book.delete
    redirect '/books'
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

end
