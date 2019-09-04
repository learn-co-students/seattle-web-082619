class Note
  attr_reader :text, :is_completed

  def initialize(text)
    @id = nil
    @text = text
    @is_completed = false
  end

  # queries a database to select all notes
  def self.all
    # DB[:conn].execute will return array
    # where each element in the array is a hash (basically)
    notes = DB[:conn].execute("SELECT * FROM notes")

    # we need to take the raw data and
    # convert the data back into actual Note instances
    notes.map do |note|
      Note.new(note["text"])
    end
  end

  def toggle_completed
    @is_completed = !is_completed
  end

  # insert a new note into a database
  def save
    if @id
      # run an UPDATE query if it is in the database
    else
      # INSERT if it's not in the database yet.
      DB[:conn].execute("INSERT INTO notes(text) VALUES('#{@text}')")
    end
  end
end