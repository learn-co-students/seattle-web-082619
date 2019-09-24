class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  def index
    @books = Book.all
  end

  def show
  end

  def new
    @authors = Author.all
    @book = Book.new
  end

  def edit
  end

  def create
    # byebug
    @book = Book.new(book_params)
    if @book.save
      redirect_to @book
    else
      flash[:message] = "Wrong info please try again bruh"
      @authors = Author.all
      render :new
    end
  end

  def update
    @book.update(book_params)
    # byebug
    redirect_to @book
  end

  def destroy
    @book.delete
    redirect_to books_path
  end

  private
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author_id, :snippet)
  end

end
