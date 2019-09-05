class Note
  attr_accessor :text, :is_complete, :id

  def initialize(text)
    @id = nil
    @text = text
    @is_complete = "incomplete"
  end

  # queries a database to select all notes
  def self.all
    # DB[:conn].execute will return array
    # where each element in the array is a hash (basically)
    notes = DB[:conn].execute("SELECT * FROM notes")

    # we need to take the raw data and
    # convert the data back into actual Note instances
    notes.map do |note|
      nn = Note.new(note["text"])
      nn.id = note["id"]
      nn.is_complete = note["is_complete"]
      nn
    end
  end

  def toggle_complete
    if @is_complete == "complete"
      @is_complete = "incomplete"
    else
      @is_complete = "complete"
    end
  end

  # insert a new note into a database
  def save(user_id)
    if @id
      # run an UPDATE query if it is in the database
      sql = <<~SQL
        UPDATE notes 
        SET text=?, is_complete=?
        WHERE id=?
      SQL
      DB[:conn].execute(sql, @text, @is_complete, @id)
    else
      # INSERT if it's not in the database yet.
      sql = <<~SQL
        INSERT INTO notes(text, is_complete, user_id) VALUES(?, ?, ?)
      SQL
      DB[:conn].execute(sql, @text, @is_complete, user_id)
    end
  end
end