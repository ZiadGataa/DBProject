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
-- Table structure for table `reviewer`
--

DROP TABLE IF EXISTS `reviewer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviewer` (
  `ReviewerID` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `ReviewID` int DEFAULT NULL,
  PRIMARY KEY (`ReviewerID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `reviewer_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviewer`
--

LOCK TABLES `reviewer` WRITE;
/*!40000 ALTER TABLE `reviewer` DISABLE KEYS */;
INSERT INTO `reviewer` VALUES (1,2,'Bob Reviewer',30,'bob_reviewer@example.com',NULL),(2,3,'Charlie Reviewer',28,'charlie_reviewer@example.com',NULL),(3,5,'Eve Reviewer',35,'eve_reviewer@example.com',NULL),(4,3,'Mike Reviewer',29,'mike_reviewer@example.com',NULL),(5,5,'Kate Reviewer',34,'kate_reviewer@example.com',NULL),(6,NULL,'ziad',NULL,NULL,NULL),(7,NULL,'Donny Darko',NULL,NULL,NULL),(8,NULL,'Donny Darko',NULL,NULL,NULL),(9,NULL,'Geo',NULL,NULL,NULL),(10,NULL,'Barry Tee',32,'barry@example.com',304011),(11,NULL,'Sarah Reviewer',32,'sarah_reviewer@example.com',NULL),(12,NULL,'Tom Reviewer',27,'tom_reviewer@example.com',NULL),(13,NULL,'Alice Reviewer',29,'alice_reviewer@example.com',NULL),(14,NULL,'Oliver Reviewer',33,'oliver_reviewer@example.com',NULL),(15,NULL,'Mia Reviewer',30,'mia_reviewer@example.com',NULL),(16,NULL,'Noah Reviewer',28,'noah_reviewer@example.com',NULL),(17,NULL,'Emma Reviewer',35,'emma_reviewer@example.com',NULL),(18,NULL,'Liam Reviewer',31,'liam_reviewer@example.com',NULL),(19,NULL,'Sophia Reviewer',26,'sophia_reviewer@example.com',NULL),(20,NULL,'James Reviewer',34,'james_reviewer@example.com',NULL),(21,NULL,'Geo Mikey',33,'Geo@Mikey.com',855356),(22,NULL,'Geo Mikey',33,'Geo@Mikey.com',621813),(23,NULL,'Geo Mikey',33,'Geo@Mikey.com',167266);
/*!40000 ALTER TABLE `reviewer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 10:28:28
