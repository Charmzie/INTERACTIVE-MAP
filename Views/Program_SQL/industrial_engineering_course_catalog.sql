-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 05:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `industrial_engineering_course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `program` varchar(5) DEFAULT NULL,
  `course_code` varchar(20) NOT NULL,
  `course_title` varchar(255) NOT NULL,
  `lecture_units` int(11) NOT NULL,
  `laboratory_units` int(11) NOT NULL,
  `total_units` int(11) NOT NULL,
  `prerequisites` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `program`, `course_code`, `course_title`, `lecture_units`, `laboratory_units`, `total_units`, `prerequisites`) VALUES
(1, 'IE', 'SOCI 1013', 'The Contemporary World', 3, 0, 3, 'None'),
(2, 'IE', 'IEEN 1101', 'Industrial Engineering Orientation', 1, 0, 1, 'None'),
(3, 'IE', 'MATH 2033', 'College and Advanced Algebra', 3, 0, 3, 'None'),
(4, 'IE', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 3, 0, 3, 'None'),
(5, 'IE', 'ENSC 2021', 'Computer-Aided Drafting', 2, 1, 3, 'None'),
(6, 'IE', 'ENSC 2192', 'Computer Fundamentals and Programming', 3, 0, 3, 'None'),
(7, 'IE', 'PFIT 1102', 'Movement Competency Training', 2, 0, 2, 'None'),
(8, 'IE', 'NSTP 1013', 'National Service Training Program 1', 3, 0, 3, 'None'),
(9, 'IE', 'ENGL 1103', 'Purposive Communication', 3, 0, 3, 'None'),
(10, 'IE', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 3, 'None'),
(11, 'IE', 'MATH 2074', 'Differential and Integral Calculus 1', 4, 0, 4, 'College and Advanced Algebra; Plane & Spherical Trigonometry, Analytic & Solid Geometry'),
(12, 'IE', 'HUMA 1013', 'Art Appreciation', 3, 0, 3, 'None'),
(13, 'IE', 'IEEN 1203', 'Statistical Analysis for Industrial Engineering 1', 3, 0, 3, 'None'),
(14, 'IE', 'IEEN 1213', 'Principles of Economics', 3, 0, 3, 'None'),
(15, 'IE', 'IEEN 1223', 'Financial Accounting', 3, 0, 3, 'None'),
(16, 'IE', 'NASC 2011', 'Chemistry for Engineers (Lab)', 0, 3, 1, 'None'),
(17, 'IE', 'NASC 2013', 'Chemistry for Engineers (Lec)', 3, 0, 3, 'None'),
(18, 'IE', 'PFIT 1202', 'Exercise-Based Fitness Activity', 2, 0, 2, 'PFIT 1102'),
(19, 'IE', 'NSTP 1023', 'National Service Training Program 2', 3, 0, 3, 'NSTP 1013'),
(20, 'IE', 'NASC 2051', 'Physics for Engineers (Lab)', 0, 3, 1, 'None'),
(21, 'IE', 'NASC 2053', 'Physics for Engineers (Lec)', 3, 0, 3, 'None'),
(22, 'IE', 'NASC 2061', 'Physics 2 (Lab)', 0, 3, 1, 'Physics for Engineers'),
(23, 'IE', 'NASC 2063', 'Physics 2 (Lec)', 3, 0, 3, 'Physics for Engineers'),
(24, 'IE', 'MATH 2094', 'Differential and Integral Calculus 2', 4, 0, 4, 'Differential and Integral Calculus 1'),
(25, 'IE', 'MATH 2103', 'Differential Equations', 3, 0, 3, 'Differential and Integral Calculus 2'),
(26, 'IE', 'ENSC 2043B', 'Engineering Mechanics', 3, 0, 3, 'Physics 2 (Lab/Lec)'),
(27, 'IE', 'IEEN 2111', 'Industrial Materials and Processes (Lab)', 0, 3, 1, 'Chemistry for Engineers; Physics 2'),
(28, 'IE', 'IEEN 2112', 'Industrial Materials and Processes (Lec)', 2, 0, 2, 'Chemistry for Engineers; Physics 2'),
(29, 'IE', 'IEEN 2123', 'Statistical Analysis for Industrial Engineering 2', 3, 0, 3, 'Statistical Analysis for Industrial Engineering 1'),
(30, 'IE', 'IEEN 2133', 'Industrial Organization Management', 3, 0, 3, 'None'),
(31, 'IE', 'PSYC 1013', 'Understanding the Self', 3, 0, 3, 'None'),
(32, 'IE', 'ECEN 2011', 'Basic Electronics (Lab)', 0, 3, 1, 'Physics 2 (Lab/Lec)'),
(33, 'IE', 'ECEN 2012', 'Basic Electronics (Lec)', 2, 0, 2, 'Physics 2 (Lab/Lec)'),
(34, 'IE', 'PFIT 2102', 'Sports and Dance', 2, 0, 2, 'PFIT 1202'),
(35, 'IE', 'IEEN 2233', 'Advanced Mathematics for Industrial Engineering', 3, 0, 3, 'Differential Equations'),
(36, 'IE', 'IEEN 2211', 'Work Study and Measurement (Lab)', 0, 3, 1, 'Industrial Materials and Processes; Industrial Organization Management; Statistical Analysis for Industrial Engineering 1'),
(37, 'IE', 'IEEN 2213', 'Work Study and Measurement (Lec)', 3, 0, 3, 'Industrial Materials and Processes; Industrial Organization Management; Statistical Analysis for Industrial Engineering 1'),
(38, 'IE', 'ENSC 2063', 'Engineering Economics', 3, 0, 3, 'Statistical Analysis for Industrial Engineering 2'),
(39, 'IE', 'ECEN 4111', 'Programmable Logic, Control, Robotics, and Mechatronics Applications (Lab)', 0, 3, 1, 'Computer Fundamentals and Programming'),
(40, 'IE', 'ECEN 4112', 'Programmable Logic, Control, Robotics, and Mechatronics Applications (Lec)', 2, 0, 2, 'Computer Fundamentals and Programming'),
(41, 'IE', 'MEEN 3201', 'Control Engineering (Lab)', 0, 3, 1, 'Programmable Logic, Mechatronics Applications'),
(42, 'IE', 'MEEN 3203', 'Control Engineering (Lec)', 3, 0, 3, 'Programmable Logic, Mechatronics Applications'),
(43, 'IE', 'PFIT 2202', 'PATHFit 4 (Team Sports and Outdoor Adventure Activities)', 2, 0, 2, 'PFIT 2102'),
(44, 'IE', 'GECE 2213', 'GEC Elective 2 (Gender and Society)', 3, 0, 3, 'None'),
(45, 'IE', 'IEEN 2233', 'Advanced Mathematics for Industrial Engineering', 2, 3, 3, 'Differential Equations'),
(46, 'IE', 'IEEN 2211', 'Work Study and Measurement (Lab)', 0, 3, 1, 'Industrial Materials and Processes; Industrial Organization Management; Statistical Analysis for Industrial Engineering 1'),
(47, 'IE', 'IEEN 2213', 'Work Study and Measurement (Lec)', 3, 0, 3, 'Industrial Materials and Processes; Industrial Organization Management; Statistical Analysis for Industrial Engineering 1'),
(48, 'IE', 'ENSC 2063', 'Engineering Economics', 3, 0, 3, 'Statistical Analysis for Industrial Engineering 2'),
(49, 'IE', 'ECEN 4111', 'Programmable Logic, Control, Robotics, and Mechatronics Applications (Lab)', 0, 3, 1, 'Computer Fundamentals and Programming'),
(50, 'IE', 'ECEN 4112', 'Programmable Logic, Control, Robotics, and Mechatronics Applications (Lec)', 2, 0, 2, 'Computer Fundamentals and Programming'),
(51, 'IE', 'MEEN 3201', 'Control Engineering (Lab)', 0, 3, 1, 'Programmable Logic, Mechatronics Applications'),
(52, 'IE', 'MEEN 3203', 'Control Engineering (Lec)', 3, 0, 3, 'Programmable Logic, Mechatronics Applications'),
(53, 'IE', 'PFIT 2202', 'PATHFit 4 (Team Sports and Outdoor Adventure Activities)', 2, 0, 2, 'PFIT 2102'),
(54, 'IE', 'GECE 2213', 'GEC Elective 2 (Gender and Society)', 3, 0, 3, 'None'),
(55, 'IE', 'IEEN 3012', 'IE Industry Immersion', 0, 240, 240, 'None'),
(56, 'IE', 'IEEN 4101', 'Project Feasibility (Lab)', 0, 3, 3, 'Operations Management; Managerial Accounting'),
(57, 'IE', 'IEEN 4102', 'Project Feasibility (Lec)', 3, 0, 3, 'Operations Management; Managerial Accounting'),
(58, 'IE', 'IEEN 4113', 'Supply Chain Management', 3, 0, 3, 'None'),
(59, 'IE', 'IEEN 4123', 'Information Systems', 3, 0, 3, 'None'),
(60, 'IE', 'IEEN 4133', 'Systems Engineering', 3, 0, 3, 'None'),
(61, 'IE', 'IEEN 4143', 'Elementary Electrical Engineering', 3, 0, 3, 'Physics 2 (Lab/Lec)'),
(62, 'IE', 'ENSC 4003', 'Technopreneurship 101', 3, 0, 3, 'None'),
(63, 'IE', 'IEEN 4202', 'IE Capstone Project (Lab)', 0, 3, 3, '4th Year Standing'),
(64, 'IE', 'IEEN 4201', 'IE Capstone Project (Lec)', 3, 0, 3, '4th Year Standing'),
(65, 'IE', 'IEEN 4213', 'IE Elective 1', 3, 0, 3, 'Based on CMO Requirement'),
(66, 'IE', 'IEEN 4223', 'IE Elective 2', 3, 0, 3, 'Based on CMO Requirement'),
(67, 'IE', 'IEEN 4233', 'IE Elective 3', 3, 0, 3, 'Based on CMO Requirement'),
(68, 'IE', 'ENSC 1013', 'Science, Technology, and Society', 3, 0, 3, 'None'),
(69, 'IE', 'ENSC 2113', 'Environmental Science and Engineering', 3, 0, 3, 'None'),
(70, 'IE', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 3, 'None');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
