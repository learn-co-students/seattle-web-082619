SELECT albums.title, reviews.content, reviews.rating FROM reviews
JOIN albums ON albums.id = reviews.album_id;