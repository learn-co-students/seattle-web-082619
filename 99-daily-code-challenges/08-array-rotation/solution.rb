def rot_left(array, num)
  new_arr = Array.new(array.length)
  array.each_with_index do |integer, index|
    shift_num = num % array.length
    new_index = index - shift_num
    new_arr[new_index] = integer
  end
  new_arr
end


def rot_left(array, num)
  num = num % array.length
  n = array.shift(num)
  array.push(n).flatten!
end