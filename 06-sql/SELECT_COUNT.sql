SELECT COUNT(genre_id), genre_id
FROM tracks
GROUP BY genre_id
ORDER BY COUNT(genre_id) DESC;