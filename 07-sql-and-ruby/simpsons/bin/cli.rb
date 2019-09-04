class CLI
  def initialize
    @is_running = true
  end

  def run
    while @is_running
      menu

      puts "quit? (y/n)"
      is_quitting = STDIN.gets.chomp
      if is_quitting.downcase == "y"
        @is_running = false
      end
    end
  end

  def menu
    puts "What would you like to do?"
    puts "1. See all students"
    puts "2. See student grades"
    choice = STDIN.gets.chomp 
    if choice == "1"
      print_all_students
    elsif choice == "2"
      prompt_for_student
    end
  end

  def print_all_students
    sql = <<-SQL
      SELECT name FROM students
    SQL
    names = DB[:conn].execute(sql)
    names.each do |student|
      puts student['name']
    end
  end

  def prompt_for_student
    puts "Enter a name of a student to search for:"
    name = STDIN.gets.chomp
    see_student_grade(name)
  end

  def see_student_grade(name)
    sql = <<-SQL
      SELECT name, title, grade_percent
      FROM enrollments
      JOIN courses ON courses.id = enrollments.course_id
      JOIN students ON students.id = enrollments.student_id
      WHERE students.name = ?
    SQL
    rows = DB[:conn].execute(sql, name)

    if rows.length == 0
      puts "No enrollment records for #{name}."
      return
    end

    binding.pry

    rows.each do |row|
      name = row['name']
      grade = row['grade_percent']
      course = row['title']
      puts "#{name} has a #{grade}% in #{course}"
    end
  end
end