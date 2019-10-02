#input string 
#output string

#go through a string and count the characters 
#if the current and next character is the same, increment count
#otherwise, contact current character and count to output string, reset count to one

str1 = "jjjoooojjj"

def string_compression(str)
  string_segment = ""
  count = 1

  array = str.chars
  array.each_with_index do |element, index|
    next_index = index + 1 
      if element == array[next_index] 
        count+= 1  
      else 
        string_segment += element.to_s + count.to_s
        count = 1
      end
  end 
  string_segment
end 
string_compression(str1)


