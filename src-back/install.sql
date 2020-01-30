DROP DATABASE wildCircus;

CREATE DATABASE wildCircus;

USE wildCircus;

CREATE TABLE `voteRegion` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `regionName` VARCHAR(255) NOT NULL,
  `voteCount` INT DEFAULT 0,
  `idThatVoted` VARCHAR(255)
);

CREATE TABLE `discountCode` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `code` VARCHAR(8) NOT NULL,
  `used` BOOL DEFAULT false
);

CREATE TABLE `planning` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `regionName` VARCHAR(255),
  `date` VARCHAR(255)
);

CREATE TABLE `userNewsletter` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(255) NOT NULL
);

CREATE TABLE `admin` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isSuperAdmin` BOOL DEFAULT false
);

INSERT INTO `admin`(username, password, isSuperAdmin) VALUES ('superadmin','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',1);
