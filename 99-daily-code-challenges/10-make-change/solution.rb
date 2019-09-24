# makeChange(0.87);
# => { Quarters: 3, Dimes: 1, Nickles: 0, Pennies: 2 }
# makeChange(0.43);
# => { Quarters: 1, Dimes: 1, Nickles: 1, Pennies: 3 }

def make_change(num)
  change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  temp_num = (num * 100).to_i

  while temp_num > 24
    temp_num -= 25
    change[:quarters] += 1
  end

  while temp_num > 9
    temp_num -= 10
    change[:dimes] += 1
  end

  if temp_num > 4
    temp_num -= 5
    change[:nickels] += 1
  end

  change[:pennies] += temp_num

  return change
end

p "83 cents: #{make_change(0.83)}"
p "59 cents: #{make_change(0.59)}"
p "43 cents: #{make_change(0.43)}"
p "84 cents: #{make_change(0.84)}"
p "51 cents: #{make_change(0.51)}"
p "75 cents: #{make_change(0.75)}"
p "13 cents: #{make_change(0.13)}"
p "24 cents: #{make_change(0.24)}"
p "1 cents: #{make_change(0.01)}"
