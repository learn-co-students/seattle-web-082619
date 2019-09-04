CREATE TABLE cats (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER,
    breed TEXT
);
INSERT INTO cats (name, age, breed) VALUES ('Maru', 3, 'Scottish Fold');
SELECT * FROM cats WHERE age < 2;
UPDATE cats SET name = "Hana" WHERE name = "Hannah";
DELETE FROM cats WHERE id = 2;
