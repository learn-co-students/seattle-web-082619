require 'pry'
require 'sqlite3'

DB = {
  conn: SQLite3::Database.new('db/notes.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/note'
require_relative '../lib/user'