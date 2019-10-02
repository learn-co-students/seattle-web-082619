def score(a, b)
    final_score = [0, 0]
    a.each_with_index do |e, i|
      if e > b[i] 
        final_score[0] += 1
      elsif e < b[i] 
        final_score[1] += 1
      end
    end
    final_score
  end