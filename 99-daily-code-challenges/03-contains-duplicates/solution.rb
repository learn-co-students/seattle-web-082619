def contains_duplicates?(arr)
  hash = {}
  arr.each do |e|
    if hash[e]
      return true
    else
      hash[e] = 1
    end
  end
  false
end