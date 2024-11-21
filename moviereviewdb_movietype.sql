-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: moviereviewdb
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movietype`
--

DROP TABLE IF EXISTS `movietype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movietype` (
  `Genre` varchar(255) DEFAULT NULL,
  `RottenTomatoes` decimal(4,2) DEFAULT NULL,
  `IMDbRating` decimal(3,2) DEFAULT NULL,
  `ReleaseDate` date DEFAULT NULL,
  `AgeRestrictions` varchar(255) DEFAULT NULL,
  `MovieID` int DEFAULT NULL,
  KEY `MovieID` (`MovieID`),
  CONSTRAINT `movietype_ibfk_1` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movietype`
--

LOCK TABLES `movietype` WRITE;
/*!40000 ALTER TABLE `movietype` DISABLE KEYS */;
INSERT INTO `movietype` VALUES ('Sci-Fi',87.50,8.80,'2010-07-16','PG-13',1),('Sci-Fi',91.50,8.60,'2014-11-07','PG-13',2),('Action',89.00,8.70,'1999-03-31','R',3),('Crime',98.50,9.20,'1972-03-24','R',4),('Drama',92.00,8.90,'1994-10-14','R',5),('Drama',79.00,8.80,'1999-10-15','R',6),('Drama',72.00,8.80,'1994-07-06','PG-13',7),('Action',94.00,9.00,'2008-07-18','PG-13',8),('Drama',97.00,8.90,'1993-12-15','R',9),('Action',76.00,8.50,'2000-05-05','R',10),('Drama',92.00,9.30,'1994-09-23','R',11),('Romance',89.00,7.80,'1997-12-19','PG-13',12),('Sci-Fi',82.00,7.90,'2009-12-18','PG-13',13),('Crime',88.00,8.50,'2019-10-04','R',14),('Action',93.00,8.40,'2019-04-26','PG-13',15),('Comedy',79.00,8.20,'2013-12-25','R',16),('Horror',89.00,8.60,'1991-02-14','R',17),('Thriller',90.00,8.60,'1995-09-22','R',18),('War',89.00,8.30,'2009-08-21','R',19),('Crime',96.00,8.70,'1990-09-19','R',20),('History',83.00,8.40,'1995-05-24','R',21),('Crime',91.00,8.50,'2006-10-06','R',22),('Drama',91.00,8.00,'2016-12-25','PG-13',23),('Western',87.00,8.40,'2012-12-25','R',24),('Crime',94.00,7.80,'2019-11-27','R',25);
/*!40000 ALTER TABLE `movietype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 10:28:27
