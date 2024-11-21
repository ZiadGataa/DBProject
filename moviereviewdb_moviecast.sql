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
-- Table structure for table `moviecast`
--

DROP TABLE IF EXISTS `moviecast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moviecast` (
  `CastID` int NOT NULL AUTO_INCREMENT,
  `MovieID` int DEFAULT NULL,
  `ActorName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CastID`),
  KEY `MovieID` (`MovieID`),
  CONSTRAINT `moviecast_ibfk_1` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviecast`
--

LOCK TABLES `moviecast` WRITE;
/*!40000 ALTER TABLE `moviecast` DISABLE KEYS */;
INSERT INTO `moviecast` VALUES (1,1,'Leonardo DiCaprio'),(2,1,'Joseph Gordon-Levitt'),(3,2,'Matthew McConaughey'),(4,2,'Anne Hathaway'),(5,3,'Keanu Reeves'),(6,3,'Laurence Fishburne'),(7,4,'Marlon Brando'),(8,4,'Al Pacino'),(9,5,'John Travolta'),(10,5,'Samuel L. Jackson'),(11,6,'Brad Pitt'),(12,6,'Edward Norton'),(13,7,'Tom Hanks'),(14,7,'Robin Wright'),(15,8,'Christian Bale'),(16,8,'Heath Ledger'),(17,9,'Liam Neeson'),(18,9,'Ralph Fiennes'),(19,10,'Russell Crowe'),(20,10,'Joaquin Phoenix'),(21,11,'Tim Robbins'),(22,11,'Morgan Freeman'),(23,12,'Leonardo DiCaprio'),(24,12,'Kate Winslet'),(25,13,'Sam Worthington'),(26,13,'Zoe Saldana'),(27,14,'Joaquin Phoenix'),(28,14,'Robert De Niro'),(29,15,'Robert Downey Jr.'),(30,15,'Chris Evans');
/*!40000 ALTER TABLE `moviecast` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 10:28:26
