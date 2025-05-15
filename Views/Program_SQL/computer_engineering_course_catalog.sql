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
-- Database: `computer_engineering_course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `program` varchar(5) DEFAULT NULL,
  `course_code` varchar(10) NOT NULL,
  `course_title` varchar(100) NOT NULL,
  `lecture` int(11) NOT NULL,
  `laboratory` int(11) NOT NULL,
  `total_units` int(11) NOT NULL,
  `co_pre_requisite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `program`, `course_code`, `course_title`, `lecture`, `laboratory`, `total_units`, `co_pre_requisite`) VALUES
(1, 'CpE', 'SOCI 1103', 'Contemporary World', 3, 0, 3, 'None'),
(2, 'CpE', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 3, 'None'),
(3, 'CpE', 'MATH 2103', 'College and Advanced Algebra', 3, 0, 3, 'None'),
(4, 'CpE', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 3, 3, 4, 'None'),
(5, 'CpE', 'CCEN 1101', 'Computer Engineering as Discipline', 1, 0, 1, 'None'),
(6, 'CpE', 'CCEN 1102', 'Engineering Graphics and Design', 0, 6, 2, 'None'),
(7, 'CpE', 'ENGL 1013', 'Purposive Communication', 3, 0, 3, 'None'),
(8, 'CpE', 'PRTC 1013', 'Understanding the Self', 3, 0, 3, 'None'),
(9, 'CpE', 'PFFT 1102', 'PATH-FIT (Movement Competency Training)', 2, 0, 2, 'None'),
(10, 'CpE', 'NSTP 1013', 'National Service Training Program 1', 3, 0, 3, 'None'),
(11, 'CpE', 'HUMA 1013', 'Art Appreciation', 3, 0, 3, 'None'),
(12, 'CpE', 'MATH 2014', 'Differential & Integral Calculus 1', 4, 0, 4, 'College and Advanced Algebra, Plane & Spherical Trigonometry, Analytic & Solid Geometry'),
(13, 'CpE', 'BSOC 1013', 'Science, Technology and Society', 3, 0, 3, 'None'),
(14, 'CpE', 'COEN 1202', 'Object Oriented Programming', 2, 3, 3, 'Progr. Logic and Design'),
(15, 'CpE', 'ENSC 1203', 'Engineering Data Analysis', 3, 0, 3, 'Differential & Integral Calculus 1'),
(16, 'CpE', 'NASC 2313', 'Chemistry for Engineers (lec)', 3, 0, 3, 'None'),
(17, 'CpE', 'NASC 2311', 'Chemistry for Engineers (lab)', 0, 3, 1, 'None'),
(18, 'CpE', 'PFFT 1202', 'PATH-FIT (Movement-Based Physical Fitness Activity)', 2, 0, 2, 'PFFT 1102'),
(19, 'CpE', 'NSTP 1023', 'National Service Training Program 2', 3, 0, 3, 'NSTP 1'),
(20, 'CpE', 'NASC 2053', 'Physics (lec)', 3, 0, 3, 'Differential & Integral Calculus 1, Co-requisite Differential & Integral Calculus 2'),
(21, 'CpE', 'NASC 2051', 'Physics (lab)', 0, 3, 1, 'Differential & Integral Calculus 1, Co-requisite Differential & Integral Calculus 2'),
(22, 'CpE', 'MATH 2054', 'Differential & Integral Calculus 2', 4, 0, 4, 'Differential & Integral Calculus 1, Co-requisite Physics 1'),
(23, 'CpE', 'ENSC 2021', 'Computer-Aided Drafting', 3, 0, 3, '2nd Yr. Standing'),
(24, 'CpE', 'ELEN 2123', 'Fundamentals of Electrical Circuits (lec)', 3, 0, 3, 'Physics 1'),
(25, 'CpE', 'ELEN 2123L', 'Fundamentals of Electrical Circuits (lab)', 0, 3, 1, 'Physics 1'),
(26, 'CpE', 'MATH 2124', 'Differential Equations', 3, 0, 3, 'Differential & Integral Calculus 2'),
(27, 'CpE', 'COEN 2201', 'Data Structures and Algorithms', 3, 0, 3, 'Object Oriented Programming'),
(28, 'CpE', 'NASC 2051', 'Physics 2 (lec)', 3, 0, 3, 'Physics 1'),
(29, 'CpE', 'NASC 2051L', 'Physics 2 (lab)', 0, 3, 1, 'Physics 1'),
(30, 'CpE', 'ENSC 2061', 'Engineering Economics', 3, 0, 3, '2nd Yr. Standing'),
(31, 'CpE', 'PRIT 2102', 'PATHFit 3 (Sports and Dance)', 2, 0, 2, 'None'),
(32, 'CpE', 'COEN 2203', 'Numerical Methods', 3, 0, 3, 'Differential Equations'),
(33, 'CpE', 'COEN 2204', 'Software Design (lec)', 3, 0, 3, 'Data Structures and Algorithms'),
(34, 'CpE', 'COEN 2204L', 'Software Design (lab)', 0, 3, 1, 'Data Structures and Algorithms'),
(35, 'CpE', 'ECEN 2101', 'Fundamentals of Electronic Engineering (lec)', 3, 0, 3, 'Fundamentals of Electrical Circuits'),
(36, 'CpE', 'ECEN 2101L', 'Fundamentals of Electronic Engineering (lab)', 0, 3, 1, 'Fundamentals of Electrical Circuits'),
(37, 'CpE', 'HIST 2023', 'Reading in Philippine History', 3, 0, 3, 'None'),
(38, 'CpE', 'PRIT 2104', 'PATHFit 4 (Team and Outdoor Adventure Activities)', 2, 0, 2, 'PATHFit 3'),
(39, 'CpE', 'COAR 2201', 'Capstone Elective 1 (\'Big Data Science with AI\')', 3, 0, 3, 'None'),
(40, 'CpE', 'COEN 3103', 'Logic, Circuit and Design (lec)', 3, 0, 3, 'Fundamentals of Electronic Circuits'),
(41, 'CpE', 'COEN 3103L', 'Logic, Circuit and Design (lab)', 0, 3, 1, 'Fundamentals of Electronic Circuits'),
(42, 'CpE', 'COEN 3105', 'Operating System', 3, 0, 3, 'Data Structures and Algorithms'),
(43, 'CpE', 'COEN 3113', 'Introduction to Networks, Data and Digital Communication (CISCO 1)', 3, 0, 3, 'Fundamentals of Electronic Circuits'),
(44, 'CpE', 'COEN 3133', 'Methods of Research', 3, 0, 3, 'Programming Logic and Design, Numerical Methods, Fundamentals of Electronic Circuits'),
(45, 'CpE', 'COEN 3143', 'Feedback and Control System', 3, 0, 3, 'Fundamentals of Electronic Circuits'),
(46, 'CpE', 'COEN 3153', 'Fundamentals of Mixed Signals and Sensors', 3, 0, 3, 'Fundamentals of Electronic Circuits'),
(47, 'CpE', 'COEN 3111', 'Computer Engineering Drafting and Design', 0, 3, 1, 'Fundamentals of Electronic Circuits'),
(48, 'CpE', 'PHIL 1013', 'Ethics', 3, 0, 3, 'None'),
(49, 'CpE', 'COEN 3203', 'Microprocessors (lec)', 3, 0, 3, 'Logic, Circuit and Design, Fundamentals of Electronic Circuits'),
(50, 'CpE', 'COEN 3203L', 'Microprocessors (lab)', 0, 3, 1, 'Logic, Circuit and Design, Fundamentals of Electronic Circuits'),
(51, 'CpE', 'COEN 3211', 'Introduction to HDL', 3, 0, 3, 'Logic, Circuit and Design'),
(52, 'CpE', 'COEN 3223', 'CpE Project Design 1', 3, 0, 3, 'Methods of Research, 3rd Year Standing'),
(53, 'CpE', 'COEN 3213', 'Emerging Technologies in CpE', 3, 0, 3, '3rd Year Standing'),
(54, 'CpE', 'GEEC 2203', 'GEC Elective 1 (\'People and The Earth’s Ecosystem\')', 3, 0, 3, 'None'),
(55, 'CpE', 'COEN 3223', 'Capstone Elective 2 (\'CISCO 2\')', 3, 0, 3, 'Introduction to Networks, Data and Digital Communication (CISCO 1)'),
(56, 'CpE', 'COEN 3223', 'On-the-Job Training', 0, 300, 6, '3rd Year Standing'),
(57, 'CpE', 'COEN 4103', 'Computer Architecture and Organization (lec)', 3, 0, 3, 'Microprocessors'),
(58, 'CpE', 'COEN 4101', 'Computer Architecture and Organization (lab)', 0, 3, 1, 'Microprocessors'),
(59, 'CpE', 'COEN 4113', 'Embedded Systems (lec)', 3, 0, 3, 'Feedback and Control Systems'),
(60, 'CpE', 'COEN 4111', 'Embedded Systems (lab)', 0, 3, 1, 'Feedback and Control Systems'),
(61, 'CpE', 'COEN 4202', 'CpE Practice and Design 2', 0, 0, 2, 'CpE Practice and Design 1'),
(62, 'CpE', 'COEN 4123', 'Digital Signal Processing (lec)', 3, 0, 3, 'Feedback and Control Systems'),
(63, 'CpE', 'COEN 4121', 'Digital Signal Processing (lab)', 0, 3, 1, 'Feedback and Control Systems'),
(64, 'CpE', 'GECE 2213', 'GEC Elective 2 (Gender & Society)', 3, 0, 3, 'None'),
(65, 'CpE', 'COEN 4203', 'Computer Networks and Security (lec)', 3, 0, 3, 'Introduction to Networks, Data and Digital Communication'),
(66, 'CpE', 'COEN 4201', 'Computer Networks and Security (lab)', 0, 3, 1, 'Introduction to Networks, Data and Digital Communication'),
(67, 'CpE', 'COEN 4211', 'Seminars and Fieldtrips', 0, 0, 1, '4th Year Standing'),
(68, 'CpE', 'COEN 4212', 'CpE Laws and Professional Practice', 0, 0, 2, '4th Year Standing'),
(69, 'CpE', 'ENSC 4003', 'Technopreneurship', 3, 0, 3, 'None'),
(70, 'CpE', 'GECE 4103', 'GEC Free Elective 3 (Foreign Language)', 3, 0, 3, 'None'),
(71, 'CpE', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 3, 'None'),
(72, 'CpE', 'ENSC 2033', 'Basic Occupational Health and Safety', 3, 0, 3, 'None'),
(73, 'CpE', 'COEN 4223', 'Cognate Elective 3 (CISCO 3)', 3, 0, 3, 'Cognate Elective 2');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
