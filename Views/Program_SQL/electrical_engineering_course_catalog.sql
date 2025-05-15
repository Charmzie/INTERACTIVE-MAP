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
-- Database: `electrical_engineering_course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `program` varchar(5) DEFAULT NULL,
  `course_code` varchar(20) NOT NULL,
  `course_title` varchar(255) NOT NULL,
  `lecture` int(11) DEFAULT 0,
  `laboratory` int(11) DEFAULT 0,
  `studio` int(11) DEFAULT 0,
  `total_units` int(11) DEFAULT 0,
  `co_pre_requisite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `program`, `course_code`, `course_title`, `lecture`, `laboratory`, `studio`, `total_units`, `co_pre_requisite`) VALUES
(1, 'EE', 'ENGL 1103', 'Purposive Communication', 3, 0, 0, 3, 'None'),
(2, 'EE', 'SOCI 1013', 'Contemporary World', 3, 0, 0, 3, 'None'),
(3, 'EE', 'PSYC 1013', 'Understanding the Self', 3, 0, 0, 3, 'None'),
(4, 'EE', 'NSTP 1013', 'National Service Training Program 1', 0, 3, 0, 1, 'None'),
(5, 'EE', 'PFIT 1102', 'PATHFit 1 (Movement Competency Training)', 0, 2, 0, 2, 'None'),
(6, 'EE', 'ELEN 1101', 'Electrical Engineering Orientation 1 (Electrical Installation and Maintenance)', 0, 2, 0, 2, 'None'),
(7, 'EE', 'MATH 2033', 'College and Advanced Algebra', 3, 0, 0, 3, 'None'),
(8, 'EE', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 3, 0, 0, 3, 'None'),
(9, 'EE', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 0, 3, 'None'),
(10, 'EE', 'ENSC 2022', 'Computer-Aided Drafting', 0, 3, 0, 1, 'None'),
(11, 'EE', 'NASC 2013', 'Chemistry for Engineers (Lec)', 3, 0, 0, 3, 'None'),
(12, 'EE', 'NASC 2011', 'Chemistry for Engineers (Lab)', 0, 3, 0, 1, 'None'),
(13, 'EE', 'NASC 2053', 'Physics for Engineers (Lec)', 3, 0, 0, 3, 'None'),
(14, 'EE', 'NASC 2051', 'Physics for Engineers (Lab)', 0, 3, 0, 1, 'None'),
(15, 'EE', 'MATH 2074', 'Differential and Integral Calculus 1', 4, 0, 0, 4, 'MATH 2033; MATH 2044'),
(16, 'EE', 'ENSC 2192', 'Computer Fundamentals and Programming', 3, 0, 0, 3, 'None'),
(17, 'EE', 'ENSC 1013', 'Science, Technology, and Society', 3, 0, 0, 3, 'None'),
(18, 'EE', 'ELEN 1102', 'Electrical Engineering Orientation 2 (Motor Control)', 0, 2, 0, 2, 'None'),
(19, 'EE', 'HIST 1013', 'Readings in Philippine History', 3, 0, 0, 3, 'None'),
(20, 'EE', 'HUMA 1013', 'Art Appreciation', 3, 0, 0, 3, 'None'),
(21, 'EE', 'NSTP 1023', 'National Service Training Program 2', 0, 3, 0, 1, 'NSTP 1013'),
(22, 'EE', 'PFIT 1202', 'PATHFit 2 (Exercise-Based Fitness Activity)', 0, 2, 0, 2, 'PFIT 1102'),
(23, 'EE', 'NASC 2063', 'Physics 2 (Lec)', 3, 0, 0, 3, 'pre: MATH 2073, co: NASC 2053'),
(24, 'EE', 'NASC 2061', 'Physics 2 (Lab)', 0, 3, 0, 1, 'pre: MATH 2073, co: NASC 2051'),
(25, 'EE', 'MATH 2094', 'Differential and Integral Calculus 2', 4, 0, 0, 4, 'MATH 2073'),
(26, 'EE', 'ENSC 2133', 'Basic Thermodynamics', 3, 0, 0, 3, 'NASC 2063; NASC 2011'),
(27, 'EE', 'MATH 2103', 'Differential Equations', 3, 0, 0, 3, 'MATH 2093'),
(28, 'EE', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 0, 3, 'None'),
(29, 'EE', 'ELEN 2103', 'Electrical Circuits 1 (Lec)', 3, 0, 0, 3, 'NASC 2063; NASC 2061; MATH 2093'),
(30, 'EE', 'ELEN 2101', 'Electrical Circuits 1 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 2103'),
(31, 'EE', 'ENSC 2313', 'Electronic Circuits: Devices and Analysis (Lec)', 3, 0, 0, 3, 'NASC 2013; NASC 2011; NASC 2063; NASC 2061'),
(32, 'EE', 'ENSC 2311', 'Electronic Circuits: Devices and Analysis (Lab)', 0, 3, 0, 1, 'Co-requisite: ENSC 2313'),
(33, 'EE', 'ENSC 2043', 'Engineering Mechanics', 3, 0, 0, 3, 'NASC 2063; NASC 2061'),
(34, 'EE', 'ENSC 2292', 'Advanced Programming for EE', 3, 0, 0, 3, 'ENSC 2192'),
(35, 'EE', 'PFIT 2102', 'PATHFit 3 (Sports and Dance)', 0, 2, 0, 2, 'PFIT 1102, PFIT 1202'),
(36, 'EE', 'GECE 2103', 'GEC Elective 1', 3, 0, 0, 3, 'None'),
(37, 'EE', 'ELEN 2213', 'Engineering Mathematics for EE', 3, 0, 0, 3, 'MATH 2103'),
(38, 'EE', 'ELEN 2203', 'Advanced Electronics: Design and Analysis (Lec)', 3, 0, 0, 3, 'ENSC 2313; ENSC 2311'),
(39, 'EE', 'ELEN 2201', 'Advanced Electronics: Design and Analysis (Lab)', 0, 3, 0, 1, 'ENSC 2313; ENSC 2311'),
(40, 'EE', 'ELEN 2213', 'Electrical Circuits 2 (Lec)', 4, 0, 0, 4, 'ELEN 2103; ELEN 2101'),
(41, 'EE', 'ELEN 2211', 'Electrical Circuits 2 (Lab)', 0, 3, 0, 1, 'ELEN 2103; ELEN 2101'),
(42, 'EE', 'ENSC 2102', 'Fundamentals of Deformable Bodies', 2, 0, 0, 2, 'ENSC 2043'),
(43, 'EE', 'PHIL 1013', 'Ethics', 3, 0, 0, 3, 'None'),
(44, 'EE', 'ELEN 2203', 'Electromagnetics', 3, 0, 0, 3, 'NASC 2063; NASC 2061; MATH 2103'),
(45, 'EE', 'ENSC 2113', 'Engineering Data Analysis', 3, 0, 0, 3, 'MATH 2073'),
(46, 'EE', 'PFIT 2202', 'PATHFit 4 (Team Sports and Outdoor Adventure Activities)', 0, 2, 0, 2, 'PFIT 1102, PFIT 1202'),
(47, 'EE', 'ENSC 2063', 'Engineering Economics', 3, 0, 0, 3, 'None'),
(48, 'EE', 'ELEN 3103', 'Numerical Methods and Analysis (Lec)', 2, 0, 0, 2, 'None'),
(49, 'EE', 'ELEN 3101', 'Numerical Methods and Analysis (Lab)', 0, 3, 0, 1, 'None'),
(50, 'EE', 'ELEN 3133', 'Fundamentals of Electronic Communications', 3, 0, 0, 3, 'ELEN 2213; Co-requisite: ELEN 3103'),
(51, 'EE', 'ELEN 3123', 'Material Science and Engineering', 2, 0, 0, 2, 'NASC 2013; NASC 2011; ENSC 2102'),
(52, 'EE', 'ELEN 3113', 'Logic Circuits and Switching Theory (Lec)', 2, 0, 0, 2, 'ENSC 2313; ENSC 2311'),
(53, 'EE', 'ELEN 3111', 'Logic Circuits and Switching Theory (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3113'),
(54, 'EE', 'ELEN 3143', 'Industrial Electronics (Lec)', 3, 0, 0, 3, 'ELEN 2203; ELEN 2201'),
(55, 'EE', 'ELEN 3141', 'Industrial Electronics (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3143'),
(56, 'EE', 'ELEN 3153', 'Electrical Machines 1 (Lec)', 3, 0, 0, 3, 'ELEN 2213; ELEN 2211; ELEN 2203'),
(57, 'EE', 'ELEN 3151', 'Electrical Machines 1 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3153'),
(58, 'EE', 'ENSC 2033', 'Basic Occupational Safety and Health', 3, 0, 0, 3, 'None'),
(59, 'EE', 'ENSC 2113', 'Environmental Science and Engineering', 3, 0, 0, 3, 'None'),
(60, 'EE', 'ELEN 3243', 'Electrical Engineering Elective 1 (Lec)', 2, 0, 0, 2, 'Pre: 3rd year standing'),
(61, 'EE', 'ELEN 3241', 'Electrical Engineering Elective 1 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3243'),
(62, 'EE', 'ELEN 3203', 'Research Methods (Lec)', 1, 0, 0, 1, 'ENSC 2113; 3rd year standing'),
(63, 'EE', 'ELEN 3201', 'Research Methods (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3203'),
(64, 'EE', 'ELEN 3203', 'Microprocessor Systems (Lec)', 2, 0, 0, 2, 'ELEN 3113; ELEN 3111'),
(65, 'EE', 'ELEN 3201', 'Microprocessor Systems (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3203'),
(66, 'EE', 'ELEN 3243', 'Electrical Machines 2 (Lec)', 4, 0, 0, 4, 'ELEN 3153; ELEN 3151'),
(67, 'EE', 'ELEN 3241', 'Electrical Machines 2 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3243'),
(68, 'EE', 'MEEN 3212', 'Fluid Mechanics', 2, 0, 0, 2, 'NASC 2063; NASC 2061'),
(69, 'EE', 'ELEN 3213', 'EE Law, Codes, and Professional Ethics', 3, 0, 0, 3, 'PHIL 1013; 3rd year standing'),
(70, 'EE', 'ELEN 3223', 'Feedback Control Systems', 3, 0, 0, 3, 'ELEN 2213'),
(71, 'EE', 'ELEN 2322', 'Electrical Apparatus and Devices (Lec)', 3, 0, 0, 3, 'ELEN 2203; ELEN 2201; ELEN 2213; ELEN 2211'),
(72, 'EE', 'ELEN 3231', 'Electrical Apparatus and Devices (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 3201'),
(73, 'EE', 'GECE 3103', 'GEC Elective 2', 3, 0, 0, 3, 'None'),
(74, 'EE', 'ELEN 3012', 'On-the-Job Training', 2, 0, 0, 2, '3rd Year Standing'),
(75, 'EE', 'ELEN 4102', 'EE Integrative Course 1', 0, 2, 0, 1, '4th year standing'),
(76, 'EE', 'ELEN 4101', 'Electrical Standards and Practices', 0, 1, 0, 1, 'ELEN 3213'),
(77, 'EE', 'ELEN 4143', 'Electrical Systems and Illumination Engineering Design (Lec)', 3, 0, 0, 3, 'ELEN 3243; ELEN 3241'),
(78, 'EE', 'ELEN 4141', 'Electrical Systems and Illumination Engineering Design (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4143'),
(79, 'EE', 'ELEN 4123', 'Electrical Engineering Elective 2 (Lec)', 2, 0, 0, 2, 'None'),
(80, 'EE', 'ELEN 4121', 'Electrical Engineering Elective 2 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4123'),
(81, 'EE', 'ENSC 2073', 'Management of Engineering Projects', 3, 0, 0, 3, 'ENSC 2063'),
(82, 'EE', 'ELEN 4113', 'Research Project 1 or Capstone Design 1 (Lec)', 1, 0, 0, 1, 'ELEN 3203; ELEN 3201; Co-requisite: ELEN 4113'),
(83, 'EE', 'ELEN 4111', 'Research Project 1 or Capstone Design 1 (Lab)', 0, 3, 0, 1, 'ELEN 3203; ELEN 3201; Co-requisite: ELEN 4113'),
(84, 'EE', 'ELEN 4122', 'Instrumentation and Control (Lec)', 2, 0, 0, 2, 'ELEN 3223; Co-requisite: ELEN 4122'),
(85, 'EE', 'ELEN 4121', 'Instrumentation and Control (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4122'),
(86, 'EE', 'ENSC 2073', 'Mechatronics Engineering', 3, 0, 0, 3, 'ELEN 3143; ELEN 3141'),
(87, 'EE', 'ELEN 4212', 'Electrical Engineering Elective 3 (Lec)', 2, 0, 0, 2, 'Co-requisite: ELEN 4203'),
(88, 'EE', 'ELEN 4221', 'Electrical Engineering Elective 3 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4203'),
(89, 'EE', 'ELEN 4203', 'Power System Analysis (Lec)', 3, 0, 0, 3, '4th year standing'),
(90, 'EE', 'ELEN 4201', 'Power System Analysis (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4203'),
(91, 'EE', 'ELEN 4223', 'Renewable Energy for Sustainable Development', 3, 0, 0, 3, 'None'),
(92, 'EE', 'ELEN 4222', 'Fundamentals of Power Plant Engineering Design', 0, 3, 0, 1, 'None'),
(93, 'EE', 'ELEN 4202', 'Distribution Systems and Substation Design (Lec)', 2, 0, 0, 2, 'Co-requisite: ELEN 4201'),
(94, 'EE', 'ELEN 4231', 'Distribution Systems and Substation Design (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4202'),
(95, 'EE', 'ELEN 4232', 'EE Integrative Course 2', 0, 2, 0, 1, '4th year standing'),
(96, 'EE', 'ENSC 4003', 'Technopreneurship 101 (aligned with Capstone Output)', 3, 0, 0, 3, 'ELEN 4113; ELEN 4111'),
(97, 'EE', 'ELEN 4232', 'Research Project 2 or Capstone Design 2 (Lec)', 1, 0, 0, 1, 'Co-requisite: ELEN 4232'),
(98, 'EE', 'ELEN 4231', 'Research Project 2 or Capstone Design 2 (Lab)', 0, 3, 0, 1, 'Co-requisite: ELEN 4232'),
(99, 'EE', 'ELEN 4211', 'Seminar/Colloquia', 1, 0, 0, 1, '4th year standing'),
(100, 'EE', 'GECE 4103', 'GEC Elective 3', 3, 0, 0, 3, 'None');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
