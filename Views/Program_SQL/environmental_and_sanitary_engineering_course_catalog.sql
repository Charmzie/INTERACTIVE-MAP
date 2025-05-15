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
-- Database: `environmental_and_sanitary_engineering_course_catalog`
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
(1, 'ENSE', 'ENSC 1013', 'Science, Technology, and Society', 3, 0, 3, NULL),
(2, 'ENSE', 'HIST 1013', 'Readings in Philippine History', 3, 0, 3, NULL),
(3, 'ENSE', 'MATH 2033', 'College and Advanced Algebra', 3, 0, 3, NULL),
(4, 'ENSE', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 3, 0, 3, NULL),
(5, 'ENSE', 'NASC 2013', 'Chemistry for Engineers 1 (Lecture)', 3, 0, 3, NULL),
(6, 'ENSE', 'NASC 2011', 'Chemistry for Engineers 1 (Laboratory)', 0, 3, 1, NULL),
(7, 'ENSE', 'ENGL 1103', 'Purposive Communication', 3, 0, 3, NULL),
(8, 'ENSE', 'ENSC 1202', 'Engineering Drawing and Plans', 0, 3, 1, NULL),
(9, 'ENSE', 'ENSE 1201', 'Environmental & Sanitary Engineering Orientation', 1, 0, 1, NULL),
(10, 'ENSE', 'PFIT 1102', 'PATHFit 1 (Movement Competency Training)', 2, 0, 2, NULL),
(11, 'ENSE', 'NSTP 1013', 'National Service Program 1', 3, 0, 3, NULL),
(12, 'ENSE', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 3, 'College and Advanced Algebra'),
(13, 'ENSE', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 3, NULL),
(14, 'ENSE', 'SOCI 1013', 'Contemporary World', 3, 0, 3, NULL),
(15, 'ENSE', 'MATH 2074', 'Differential & Integral Calculus 1', 4, 0, 4, 'College and Advanced Algebra; Plane & Spherical Trigonometry, Analytic & Solid Geometry'),
(16, 'ENSE', 'NASC 2053', 'Physics 1 (Lecture)', 3, 0, 3, NULL),
(17, 'ENSE', 'NASC 2051', 'Physics 1 (Laboratory)', 0, 3, 1, NULL),
(18, 'ENSE', 'CHEM 2023', 'Chemistry for Engineers 2 (Lecture)', 3, 0, 3, 'Chemistry for Engineers 1'),
(19, 'ENSE', 'CHEM 2021', 'Chemistry for Engineers 2 (Laboratory)', 0, 3, 1, 'Chemistry for Engineers 1'),
(20, 'ENSE', 'ENEN 1200', 'Environmental Geology and Natural Disasters', 3, 0, 3, NULL),
(21, 'ENSE', 'PFIT 1202', 'PATHFit 2 (Exercise Based Fitness Activity)', 2, 0, 2, 'PATHFit 1 (Movement Competency Training)'),
(22, 'ENSE', 'NSTP 1023', 'National Service Program 2', 3, 0, 3, 'National Service Program 1'),
(23, 'ENSE', 'NASC 2063', 'Physics 2 (Lecture)', 3, 0, 3, 'Physics 1'),
(24, 'ENSE', 'NASC 2061', 'Physics 2 (Laboratory)', 0, 3, 1, 'Physics 1'),
(25, 'ENSE', 'MATH 2093', 'Differential & Integral Calculus 2', 4, 0, 4, 'Differential & Integral Calculus 1'),
(26, 'ENSE', 'ENSE 2112', 'Environmental Analytical Chemistry (Lecture)', 3, 0, 3, 'Environmental Chemistry'),
(27, 'ENSE', 'ENSE 2101', 'Analytical Chemistry for Engineers 2 (Laboratory)', 0, 1, 1, 'Environmental Chemistry'),
(28, 'ENSE', 'ENSE 2103', 'Environmental Science and Engineering', 3, 0, 3, NULL),
(29, 'ENSE', 'ENSE 2113', 'Sanitary Chemistry (Lecture)', 3, 0, 3, NULL),
(30, 'ENSE', 'ENSE 2111', 'Environmental and Sanitary Chemistry (Laboratory)', 0, 3, 1, 'Environmental Chemistry'),
(31, 'ENSE', 'CIEN 2104', 'Fundamentals of Surveying (Lecture)', 3, 0, 3, NULL),
(32, 'ENSE', 'CIEN 2111', 'Fundamentals of Surveying (Laboratory)', 0, 3, 1, NULL),
(33, 'ENSE', 'MATH 2103', 'Differential Equations', 3, 0, 3, 'Differential & Integral Calculus 2'),
(34, 'ENSE', 'ENSC 2013', 'Engineering Data Analysis', 3, 0, 3, NULL),
(35, 'ENSE', 'ENSC 2043', 'Statics of Rigid Bodies', 3, 0, 3, NULL),
(36, 'ENSE', 'ENSC 2022', 'Computer-aided Drafting', 0, 3, 1, NULL),
(37, 'ENSE', 'ENSC 2191', 'Computer Fundamentals and Programming', 0, 3, 1, NULL),
(38, 'ENSE', 'ENSC 2132', 'Engineering Utilities 1 (Basic Electrical Engineering) Lecture', 2, 0, 2, NULL),
(39, 'ENSE', 'ENSC 2131', 'Engineering Utilities 1 (Basic Electrical Engineering) Laboratory', 0, 3, 1, NULL),
(40, 'ENSE', 'PFIT 2102', 'PATHFit 3 (Sports and Dance)', 2, 0, 2, NULL),
(41, 'ENSE', 'GECE 2203', 'People and the Earth\'s Ecosystem', 3, 0, 3, NULL),
(42, 'ENSE', 'ENSC 2082', 'Dynamics of Rigid Bodies', 2, 0, 2, 'Statics of Rigid Bodies'),
(43, 'ENSE', 'CIEN 2222', 'Numerical Solutions to Engineering Problems (Lecture)', 2, 0, 2, 'Differential Equations'),
(44, 'ENSE', 'CIEN 2221', 'Numerical Solutions to Engineering Problems (Laboratory)', 0, 3, 1, 'Differential Equations'),
(45, 'ENSE', 'ENSC 2063', 'Engineering Economics', 3, 0, 3, NULL),
(46, 'ENSE', 'HUMA 1013', 'Art Appreciation', 3, 0, 3, NULL),
(47, 'ENSE', 'CIEN 3142', 'Building System Design (Lecture)', 2, 0, 2, NULL),
(48, 'ENSE', 'CIEN 3141', 'Building System Design (Laboratory)', 0, 1, 1, NULL),
(49, 'ENSE', 'ENSE 2201', 'Microbiology and Parasitology (Laboratory)', 0, 3, 1, NULL),
(50, 'ENSE', 'ENSC 2104', 'Mechanics of Deformable Bodies', 4, 0, 4, 'Statics of Rigid Bodies'),
(51, 'ENSE', 'ENSE 2003', 'Public Health Engineering', 3, 0, 3, NULL),
(52, 'ENSE', 'CIEN 2232', 'Fluid Mechanics (Lecture)', 2, 0, 2, NULL),
(53, 'ENSE', 'CIEN 2231', 'Fluid Mechanics (Laboratory)', 0, 3, 1, NULL),
(54, 'ENSE', 'ENSE 3103', 'Ecology and Environmental Pollution', 3, 0, 3, NULL),
(55, 'ENSE', 'ENSE 3113', 'Solid and Hazardous Waste Engineering', 3, 0, 3, NULL),
(56, 'ENSE', 'CIEN 3113', 'Geotechnical Engineering (Soil Mechanics) Laboratory', 0, 1, 1, 'Mechanics of Deformable Bodies'),
(57, 'ENSE', 'CIEN 3111', 'Geotechnical Engineering (Soil Mechanics) Lecture', 3, 0, 3, 'Mechanics of Deformable Bodies'),
(58, 'ENSE', 'ENSE 3101', 'Method of Research', 3, 0, 3, NULL),
(59, 'ENSE', 'ENSE 3123', 'Environmental & Sanitary Engineering Elective 1', 3, 0, 3, NULL),
(60, 'ENSE', 'CIEN 3122', 'Theory of Structure (Laboratory)', 0, 3, 1, 'Mechanics of Deformable Bodies'),
(61, 'ENSE', 'CIEN 3121', 'Theory of Structure (Lecture)', 3, 0, 3, 'Mechanics of Deformable Bodies'),
(62, 'ENSE', 'ENSE 3133', 'Environmental Planning, Laws, and Impact Assessment', 3, 0, 3, 'Public Health Engineering: Ethics'),
(63, 'ENSE', 'CIEN 3134', 'Hydraulics (Lecture)', 4, 0, 4, 'Fluid Mechanics; Dynamics of Rigid Bodies; Mechanics of Deformable Bodies, Hydrology; Theory of Structures'),
(64, 'ENSE', 'CIEN 3131', 'Hydraulics (Laboratory)', 0, 3, 1, 'Fluid Mechanics; Dynamics of Rigid Bodies; Mechanics of Deformable Bodies, Hydrology; Theory of Structures'),
(65, 'ENSE', 'ENSE 3202', 'Occupational Health and Safety', 2, 0, 2, '3rd Year Standing: Microbiology and Parasitology for Environmental Engineers; Environmental Science and Engineering'),
(66, 'ENSE', 'ENSE 3203', 'Water Supply Planning and Development', 3, 0, 3, 'Hydraulics, Hydrology'),
(67, 'ENSE', 'CIEN 3234', 'Principles of Reinforced/Prestressed Concrete (Lecture)', 3, 0, 4, 'Theory of Structure'),
(68, 'ENSE', 'CIEN 3231', 'Principles of Reinforced/Prestressed Concrete (Laboratory)', 0, 3, 1, 'Theory of Structure'),
(69, 'ENSE', 'ENSE 3213', 'Engineering Management', 2, 0, 2, 'Engineering Economics; 3rd Year Standing'),
(70, 'ENSE', 'ENSE 3213', 'Sewerage and Urban Drainage Engineering', 3, 0, 3, 'Geotechnical Engineering (Soil Mechanics)'),
(71, 'ENSE', 'CIEN 2212', 'Construction Materials and Testing (Lecture)', 3, 0, 3, 'Mechanics of Deformable Bodies'),
(72, 'ENSE', 'CIEN 2211', 'Construction Materials and Testing (Laboratory)', 0, 3, 1, 'Mechanics of Deformable Bodies'),
(73, 'ENSE', 'ENSE 3204', 'Sanitary Science, Fire Protection, and Plumbing', 2, 1, 4, 'Hydraulics; Building System Design; Occupational Health and Safety'),
(74, 'ENSE', 'ENSE 3002', 'On-the-Job Training', 0, 240, 0, '3rd Year Standing'),
(75, 'ENSE', 'ENSE 4103', 'Environmental Engineering Laboratory', 0, 3, 1, 'Environmental Impact Assessment; Environmental Science and Engineering; Solid Waste Management'),
(76, 'ENSE', 'GECE 4131', 'GEC Free Elective 2 (Gender and Society)', 3, 0, 3, 'None'),
(77, 'ENSE', 'CIEN 4242', 'Data Science with Artificial Intelligence (Lecture)', 2, 0, 2, 'Engineering Data Analysis'),
(78, 'ENSE', 'CIEN 4241', 'Data Science with Artificial Intelligence (Laboratory)', 0, 3, 1, 'Engineering Data Analysis'),
(79, 'ENSE', 'ENSE 4101', 'Research Project 1 (Lecture)', 1, 0, 1, 'Research Method; Project Management; Engineering Data Analysis'),
(80, 'ENSE', 'ENSE 4111', 'Research Project 1 (Laboratory)', 0, 3, 1, 'Research Method; Project Management'),
(81, 'ENSE', 'ENSE 4123', 'Water Purification Process Design', 3, 0, 3, 'Engineering Data Analysis; Surface and Groundwater Hydrology; Water Supply Planning and Development'),
(82, 'ENSE', 'GECE 4103', 'GEC Free Elective 3', 3, 0, 3, 'None'),
(83, 'ENSE', 'PSYC 1013', 'Understanding the Self', 0, 0, 0, 'None'),
(84, 'ENSE', 'ENSE 4203', 'Environmental and Sanitary International and National Laws, Ethics, Obligations and Contracts', 3, 0, 3, 'Ethics; Environmental Planning; Impact Assessment; Ecology and Environmental Pollution'),
(85, 'ENSE', 'ENSC 4003', 'Technopreneurship 101', 3, 0, 3, '4th Year Standing'),
(86, 'ENSE', 'ENSE 4213', 'Seminar and Plant Visit', 0, 3, 1, '4th Year Standing'),
(87, 'ENSE', 'ENSE 4211', 'Research Project 2 (Thesis) Lecture', 1, 0, 1, 'Research Project 1'),
(88, 'ENSE', 'ENSE 4221', 'Research Project 2 (Thesis) Laboratory', 0, 3, 1, 'Research Project 1'),
(89, 'ENSE', 'ENSE 4201', 'EnSe Correlation Course', 6, 0, 6, 'EnSe Correlation Course 1');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
