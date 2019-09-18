array1 = [10,9,8,6,3,7,4,2,1]



def missing_num(array)
  total_missing_one = array.sum
  missing_number = 55 - total_missing_one
end 
missing_num(array1)


def min_max(array)
  array = array.sort 
  min = array.min
  max = array.max 
  (min..max).sum - array.sum 
end 
min_max(array1)