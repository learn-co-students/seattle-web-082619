class User
  attr_accessor :id, :username

  def initialize(username)
    @id = nil
    @username = username
  end

  def self.all
    sql = "SELECT * FROM users"
    rows = DB[:conn].execute(sql)
    rows.map do |row|
      user = User.new(row["username"])
      user.id = row["id"]
      user
    end
  end

  def self.find_by_name(name)
    sql = <<~SQL
      SELECT id, username
      FROM users
      WHERE username = ?
    SQL
    rows = DB[:conn].execute(sql, name)
    if rows.length == 0
      return nil
    end

    user = User.new(rows.first["username"])
    user.id = rows.first["id"]
    user
  end

  def notes
    # prevent a user that hasn't been saved to the database from querying notes
    if @id == nil
      return []
    end

    sql = <<~SQL
      SELECT *
      FROM notes
      JOIN users
      ON notes.user_id = users.id
      WHERE users.username = '#{username}'
    SQL

    rows = DB[:conn].execute(sql)
    rows.map do |row|
      note = Note.new(row["text"])
      note.id = row["id"]
      note.is_complete = row["is_complete"]
      note
    end
  end

  def save
    sql = <<-SQL
      INSERT INTO users(username)
      VALUES ('#{@username}')
    SQL
    DB[:conn].execute(sql)

    @id = User.find_by_name(@username).id
  end
end