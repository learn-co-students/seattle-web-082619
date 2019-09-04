SELECT albums.title FROM albums
JOIN artists ON albums.artist_id = artists.id
JOIN tracks ON tracks.album_id = albums.id
JOIN genres ON tracks.genre_id = genres.id
WHERE genres.id = 18;