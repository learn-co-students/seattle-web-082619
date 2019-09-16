min = array[0]
max = array[0]
sum = 0

array.each do |num|
  sum = sum + num 
  if num > max
    max = num
  end
  if num < min
    min = num
  end 
end 
puts "#{sum - max} #{sum - min}"