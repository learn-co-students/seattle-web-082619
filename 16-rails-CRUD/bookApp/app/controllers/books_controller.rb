class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
    redirect_to @book
    # byebug
  end

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    @book.update(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
    # @book = Book.create(title: params[:book][:title], author: params[:book][:author], snippet: params[:book][:snippet])
    byebug
    redirect_to @book
    # byebug
  end

  def destroy
    @book = Book.find(params[:id])
    @book.delete

    redirect_to books_path
  end

end
