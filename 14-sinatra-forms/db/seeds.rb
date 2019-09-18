Book.destroy_all

Adapter::GoogleBooks.new("Brandon Sanderson").fetch_books
Adapter::GoogleBooks.new("Brian Christian").fetch_books
Adapter::GoogleBooks.new("Margaret Atwood").fetch_books
