require 'pry'
require 'benchmark'

$count = 0

def fib(n)
  if n < 2
    return n
  end

  first = 0
  second = 1
  count = 2

  while count <= n
    $count += 1
    puts $count
    count += 1
    second += first
    first = second - first
  end
  second
end

binding.pry