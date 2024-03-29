require 'pry'
require 'sqlite3'

DB = {
  conn: SQLite3::Database.new('db/notes.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/guessing_game'
require_relative '../lib/note'