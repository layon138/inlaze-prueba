create database dbinlaze;

CREATE TABLE Users (
    id_user  varchar(100) NOT NULL,
    fullname varchar(100),
    age int,
    email varchar(50),
    pass varchar(50),
    create_at DATE,
    update_at DATE,
    delete_at DATE,
    PRIMARY KEY(id_user) 
);

ALTER TABLE Users
ALTER COLUMN pass TYPE varchar(100);

INSERT INTO Users 
VALUES ('123456','julian vargas',28,'julian@yopmail.com','123654','1995-12-13',null,null);

CREATE TABLE Posts (
    id_post INT GENERATED ALWAYS AS IDENTITY,
    id_user varchar(50),
    title varchar(20),
    content varchar(50),
    likes int,
    create_at DATE,
    update_at DATE,
    delete_at DATE,
    PRIMARY KEY(id_post),
    FOREIGN KEY (id_user) REFERENCES Users (id_user)
);