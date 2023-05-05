-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema patients
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema patients
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `patients` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `patients` ;

-- -----------------------------------------------------
-- Table `patients`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `patients`.`patients` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL DEFAULT NULL,
  `Date_Of_Birth` VARCHAR(45) NULL DEFAULT NULL,
  `Gender` VARCHAR(45) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `Phone` VARCHAR(45) NULL DEFAULT NULL,
  `Address` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
INSERT INTO patients (Name, Date_Of_Birth, Gender, Email,Phone, Address)
VALUES ('John Doe', '1985-04-15', 'Male', 'john.doe@example.com', '+1 (123) 456-7890', '123 Main Street, Anytown USA');

INSERT INTO patients (Name, Date_Of_Birth, Gender, email,Phone, Address)
VALUES ('Jane Smith', '1990-10-01', 'Female', 'jane.smith@example.com', '+1 (234) 567-8901', '456 Park Avenue, Another Town USA');

INSERT INTO patients (Name, Date_Of_Birth, Gender, email,Phone, Address)
VALUES ('Bob Johnson', '1978-06-23', 'Male', 'bob.johnson@example.com', '+1 (345) 678-9012', '789 Elm Street, Yet Another Town USA');

INSERT INTO patients (Name, Date_Of_Birth, Gender, email,Phone, Address)
VALUES ('Sarah Williams', '1989-12-05', 'Female', 'sarah.williams@example.com', '+1 (456) 789-0123', '1010 Pine Street, Smallville USA');
