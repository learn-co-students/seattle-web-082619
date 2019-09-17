def stone_weight(arr)
  stones = arr.sort
  until stones.length < 2
    if stones[-1] > stones[-2]
      new = stones[-1] - stones[-2]
      stones.unshift(new)
      stones.sort!
    end
    stones.pop(2)
  end
  stones.empty? ? 0 : stones[0]
end