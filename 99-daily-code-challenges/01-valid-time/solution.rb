def valid_time?(time)
  hour, minute = time.split(':')
  (0..23) === hour.to_i && (0..59) === minute.to_i
end
