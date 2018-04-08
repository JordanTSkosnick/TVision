CREATE TABLE member (
    email VARCHAR(50) NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password STRING NOT NULL
);
CREATE TABLE show (
    showID VARCHAR(15) NOT NULL PRIMARY KEY,
    name STRING NOT NULL UNIQUE
);
CREATE TABLE watches (
    showID VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    showname STRING,
    FOREIGN KEY (showID) REFERENCES show(showID),
    FOREIGN KEY (email) REFERENCES member(email)
);