DROP DATABASE wildCircus;

CREATE DATABASE wildCircus;

USE wildCircus;

CREATE TABLE `vote-region` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `region-name` VARCHAR(255) NOT NULL,
  `vote-count` INT
);

CREATE TABLE `discount-code` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `code` VARCHAR(8) NOT NULL,
  `used` BOOL DEFAULT false
);

CREATE TABLE `planning` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `region-name` VARCHAR(255),
  `date` VARCHAR(255)
);

CREATE TABLE `user-newsletter` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(255) NOT NULL
);

CREATE TABLE `admin` (
  `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is-superadmin` BOOL DEFAULT false
);

INSERT INTO `admin`(username, password, is-superadmin) VALUES ('superadmin','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',1);
