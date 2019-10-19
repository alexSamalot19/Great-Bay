DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  price DECIMAL(13, 2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (item, price)
VALUES ('NFL jersey', 200.00);

SELECT * FROM items;
