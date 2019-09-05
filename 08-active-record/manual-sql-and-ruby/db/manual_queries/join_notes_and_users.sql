SELECT username, text, is_complete
FROM notes
JOIN users
ON notes.user_id = users.id