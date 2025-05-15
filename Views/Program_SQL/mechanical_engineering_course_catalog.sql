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
-- Database: `mechanical_engineering_course_catalog`
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
(1, 'ME', 'NSTP 1013', 'National Service Training Program 1', 3, 0, 3, 'None'),
(2, 'ME', 'PFIT 1102', 'PATHFI 1 (Movement Competency Training)', 2, 0, 2, 'None'),
(3, 'ME', 'ENGL 1103', 'Purposive Communication', 3, 0, 3, 'None'),
(4, 'ME', 'MATH 2033', 'College and Advanced Algebra', 2, 3, 3, 'None'),
(5, 'ME', 'NASC 2013', 'Chemistry for Engineers (Lec)', 3, 0, 3, 'None'),
(6, 'ME', 'NASC 2011', 'Chemistry for Engineers (Lab)', 0, 3, 1, 'None'),
(7, 'ME', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 3, 3, 4, 'None'),
(8, 'ME', 'ENSC 2011', 'Engineering Drawing', 0, 3, 1, 'None'),
(9, 'ME', 'MEEN 1101', 'Mechanical Engineering Orientation', 0, 1, 1, 'None'),
(10, 'ME', 'GECE 2213', 'GEC Free Elective 2 (Gender and Society)', 3, 0, 3, 'None'),
(11, 'ME', 'SOCI 1013', 'Contemporary World', 3, 0, 3, 'None'),
(12, 'ME', 'NSTP 1023', 'National Service Training Program 2', 3, 0, 3, 'NSTP 1013'),
(13, 'ME', 'PFIT 1202', 'PATHFI 2 (Exercise-Based Fitness Activity)', 2, 0, 2, 'PFIT 1102'),
(14, 'ME', 'HUMA 1013', 'Art Appreciation', 3, 0, 3, 'None'),
(15, 'ME', 'ENSC 2113', 'Environmental Science and Engineering', 3, 0, 3, 'NASC 2013; NASC 2011'),
(16, 'ME', 'HIST 1013', 'Readings in Philippine History', 3, 0, 3, 'None'),
(17, 'ME', 'ENSC 1013', 'Science, Technology, and Society', 3, 0, 3, 'None'),
(18, 'ME', 'MATH 2074', 'Differential and Integral Calculus 1', 4, 0, 4, 'None'),
(19, 'ME', 'NASC 2053', 'Physics 1 (Lec)', 3, 0, 3, 'None'),
(20, 'ME', 'NASC 2051', 'Physics 1 (Lab)', 0, 3, 1, 'None'),
(21, 'ME', 'ENSC 2021', 'Computer Aided Drafting', 3, 1, 4, 'None'),
(22, 'ME', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 3, 'None'),
(23, 'ME', 'PSYC 1013', 'Understanding the Self', 3, 0, 3, 'None'),
(24, 'ME', 'NASC 2063', 'Physics 2 (Lec)', 3, 0, 3, 'NASC 2053; NASC 2051'),
(25, 'ME', 'NASC 2061', 'Physics 2 (Lab)', 0, 3, 1, 'NASC 2051; NASC 2053'),
(26, 'ME', 'MATH 2094', 'Differential and Integral Calculus 2', 4, 0, 4, 'MATH 2074'),
(27, 'ME', 'MATH 2103', 'Differential Equations', 3, 0, 3, 'Differential and Integral Calculus 2'),
(28, 'ME', 'STAT 2101', 'Statics of Rigid Bodies', 3, 0, 3, 'Calculus 2, Physics 2'),
(29, 'ME', 'PFIT 2102', 'PATHF 3 (Sports and Dance)', 0, 2, 2, 'PFIT 1202, PFIT 1102'),
(30, 'ME', 'ENSC 2043', 'Basic Electrical Engineering (lec)', 3, 0, 3, 'Calculus 2, Physics 2'),
(31, 'ME', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 3, 'None'),
(32, 'ME', 'ENSC 2191', 'Computer Fundamentals and Programming', 0, 3, 3, 'None'),
(33, 'ME', 'GECE 2203', 'GEC Free Elective 1 (People and the Earth\'s Ecosystem)', 3, 0, 3, 'None'),
(34, 'ME', 'ENSC 2142', 'Basic Electrical Engineering (lec)', 3, 0, 3, 'None'),
(35, 'ME', 'MEEN 2104', 'Basic Electrical Engineering (lab)', 0, 3, 1, 'Basic Electrical Engineering (lec)'),
(36, 'ME', 'MEEN 2102', 'Workshop Theory and Practice', 0, 6, 2, 'None'),
(37, 'ME', 'PFIT 2202', 'PATHF 4 (Team Sports and Outdoor Adventure Activities)', 0, 2, 2, 'PFIT 1202, PFIT 1102'),
(38, 'ME', 'ENSC 2013', 'Engineering Data Analysis', 3, 0, 3, 'None'),
(39, 'ME', 'MEEN 2223', 'Advanced Mathematics for ME', 2, 3, 3, 'Differential and Integral Calculus 1'),
(40, 'ME', 'ENSC 2082', 'Dynamics of Rigid Bodies', 3, 0, 3, 'None'),
(41, 'ME', 'ENSC 2142', 'Basic Electrical Engineering (lec)', 3, 0, 3, 'None'),
(42, 'ME', 'ENSC 2141', 'Basic Electrical Engineering (lab)', 0, 3, 1, 'Basic Electrical Engineering (lec)'),
(43, 'ME', 'MEEN 2203', 'Thermodynamics 1', 3, 0, 3, 'Calculus 2, Physics 2'),
(44, 'ME', 'MEEN 2221', 'Computer Applications for ME (lec)', 1, 0, 1, 'None'),
(45, 'ME', 'MEEN 2211', 'Computer Applications for ME (lab)', 0, 3, 1, 'None'),
(46, 'ME', 'MEEN 2202', 'Machine Shop Theory and Practice', 0, 6, 2, 'None'),
(47, 'ME', 'ENSC 2103', 'Mechanics of Deformable Bodies', 3, 0, 3, 'None'),
(48, 'ME', 'ENSC 2063', 'Engineering Economics', 3, 0, 3, 'None'),
(49, 'ME', 'ELEN 2012', 'DC and AC Machinery (lec)', 3, 0, 3, 'None'),
(50, 'ME', 'ELEN 2011', 'DC and AC Machinery (lab)', 0, 3, 1, 'None'),
(51, 'ME', 'MEEN 3112', 'Heat Transfer', 3, 0, 3, 'None'),
(52, 'ME', 'MEEN 3113', 'Fluid Mechanics', 3, 0, 3, 'None'),
(53, 'ME', 'MEEN 3102', 'Machine Elements 1 (lec)', 3, 0, 3, 'None'),
(54, 'ME', 'MEEN 3101', 'Machine Elements 1 (lab)', 0, 3, 1, 'Machine Elements 1 (lec)'),
(55, 'ME', 'MEEN 3122', 'Vibration Engineering', 3, 0, 3, 'None'),
(56, 'ME', 'PHIL 1013', 'Ethics', 3, 0, 3, 'None'),
(57, 'ME', 'MEEN 3142', 'Methods of Research for ME', 3, 0, 3, 'None'),
(58, 'ME', 'MEEN 3233', 'Refrigeration Systems', 3, 0, 3, 'None'),
(59, 'ME', 'MEEN 3213', 'Fluid Machineries', 3, 0, 3, 'None'),
(60, 'ME', 'MEEN 3223', 'Combustion Engineering', 3, 0, 3, 'None'),
(61, 'ME', 'MEEN 3203', 'Machine Elements 2', 3, 0, 3, 'Machine Elements 1'),
(62, 'ME', 'MEEN 3262', 'Materials Science and Engineering for ME (lec)', 3, 0, 3, 'None'),
(63, 'ME', 'MEEN 3261', 'Materials Science and Engineering for ME (lab)', 0, 3, 1, 'Materials Science and Engineering for ME (lec)'),
(64, 'ME', 'MEEN 3202', 'Mechanical Engineering Laboratory 1', 0, 6, 2, 'None'),
(65, 'ME', 'MEEN 3273', 'Control Engineering', 3, 0, 3, 'None'),
(66, 'ME', 'MEEN 3271', 'Control Engineering Laboratory', 0, 3, 1, 'Control Engineering'),
(67, 'ME', 'MEEN 3282', 'Mechanical Engineering Elective 1', 3, 0, 3, 'None'),
(68, 'ME', 'MEEN 3281', 'Mechanical Engineering Elective 1', 0, 6, 2, 'Mechanical Engineering Elective 1'),
(69, 'ME', 'MEEN 4122', 'Mechanical Engineering Elective 2 (lec)', 3, 0, 3, 'None'),
(70, 'ME', 'MEEN 4133', 'Mechanical Engineering Elective 2 (lab)', 0, 3, 1, 'Mechanical Engineering Elective 2 (lec)'),
(71, 'ME', 'MEEN 4112', 'ME Project Study 1', 3, 0, 3, 'None'),
(72, 'ME', 'MEEN 4142', 'Air Conditioning and Ventilation Systems', 3, 0, 3, 'None'),
(73, 'ME', 'MEEN 4141', 'Power Plant Design with Renewable Energy', 3, 0, 3, 'None'),
(74, 'ME', 'MEEN 4123', 'Machine Design 1', 3, 0, 3, 'None'),
(75, 'ME', 'MEEN 4102', 'Engineering Management', 3, 0, 3, 'None'),
(76, 'ME', 'MEEN 4204', 'ME Project Study 2', 3, 0, 3, 'ME Project Study 1'),
(77, 'ME', 'MEEN 4232', 'Machine Design 2', 3, 0, 3, 'Machine Design 1'),
(78, 'ME', 'MEEN 4203', 'Industrial Plant Engineering', 3, 0, 3, 'None'),
(79, 'ME', 'GECE 4103', 'GEC Free Elective 3', 3, 0, 3, 'None'),
(80, 'ME', 'ENSC 2033', 'Basic Occupational Safety and Health', 3, 0, 3, 'None'),
(81, 'ME', 'ENSC 4003', 'Technopreneurship 101', 3, 0, 3, 'None'),
(82, 'ME', 'MEEN 4212', 'Mechanical Engineering Laboratory 3', 0, 6, 2, 'None'),
(83, 'ME', 'MEEN 4213', 'Mechanical Engineering Elective 3', 3, 0, 3, 'Mechanical Engineering Elective 2'),
(84, 'ME', 'MEEN 4202', 'ME Integrative Course 2', 3, 0, 3, 'None');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
