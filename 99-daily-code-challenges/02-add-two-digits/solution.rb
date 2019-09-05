def add_two_digits(numbers)
  digits = numbers.to_s.split(//)
  digits.reduce(0) do |sum, i|
    sum + i.to_i
  end
end

add_two_digits(29)