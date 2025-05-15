-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2025 at 05:49 PM
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
-- Database: `civil_engineering_course_catalog`
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
  `total_units` int(11) GENERATED ALWAYS AS (`lecture` + `laboratory`) STORED,
  `co_pre_requisite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `program`, `course_code`, `course_title`, `lecture`, `laboratory`, `co_pre_requisite`) VALUES
(1, 'CE', 'SOCI1013', 'The Contemporary World', 3, 0, 'None'),
(2, 'CE', 'SOCI1013', 'The Contemporary World', 3, 0, 'None'),
(3, 'CE', 'SOCI1013', 'The Contemporary World', 3, 0, 'None'),
(4, 'CE', 'MATH2033', 'College and Advanced Algebra', 2, 3, 'None'),
(5, 'CE', 'MATH2044', 'Plane and Spherical Trigonometry, Analytic and Solid Geometry', 3, 3, 'None'),
(6, 'CE', 'NASC2013', 'Chemistry for Engineers (Lec)', 3, 0, 'None'),
(7, 'CE', 'NASC2011', 'Chemistry for Engineers (Lab)', 0, 3, 'None'),
(8, 'CE', 'CIEN1102', 'Civil Engineering Orientation', 1, 3, 'None'),
(9, 'CE', 'ENGL1103', 'Purposive Communication', 3, 0, 'None'),
(10, 'CE', 'PFIT1102', 'PATHFIT 1 (Movement Competency Training)', 2, 0, 'None'),
(11, 'CE', 'NSTP1013', 'National Service Training Program 1', 3, 0, 'None'),
(12, 'CE', 'GECE2213', 'GEC Free Elective 2 (Gender and Society)', 3, 0, 'None'),
(13, 'CE', 'HUMA1013', 'Art Appreciation', 3, 0, 'None'),
(14, 'CE', 'MATH2074', 'Differential and Integral Calculus 1', 4, 0, 'College and Advanced Algebra & Plane and Spherical Trigonometry, Analytic and Solid Geometry '),
(15, 'CE', 'ENSC1202', 'Engineering Drawing and Plans', 0, 6, 'None'),
(16, 'CE', 'ENSC2192', 'Computer Fundamentals and Programming', 0, 6, 'None'),
(17, 'CE', 'HIST1013', 'Reading in Philippine History', 3, 0, 'None'),
(18, 'CE', 'PFIT1102', 'PATHFIT 2 (Exercise-Based Fitness Activity)', 2, 0, 'PATHFIT 1'),
(19, 'CE', 'NSTP1013', 'National Service Training Program 2', 3, 0, 'None'),
(20, 'CE', 'MATH1013', 'Mathematics in the Modern World', 3, 0, 'None'),
(21, 'CE', 'NASC2053', 'Physics 1 (Lec)', 3, 0, 'Co-requisite of Differential and Integral Calculus 1'),
(22, 'CE', 'NASC2051', 'Physics 1 (Lab)', 0, 3, 'Co-requisite of Differential and Integral Calculus 1'),
(23, 'CE', 'PSYC1013', 'Understanding the Self', 3, 0, 'None'),
(24, 'CE', 'NASC2063', 'Physics 2 (Lec)', 3, 0, 'Physics 1/Co-requisite of Differential and Integral Calculus 2'),
(25, 'CE', 'NASC2061', 'Physics 2 (Lab)', 0, 3, 'Physics 1/Co-requisite of Differential and Integral Calculus 2'),
(26, 'CE', 'MATH2094', 'Differential and Integral Calculus 2', 4, 0, 'Differential and Integral Calculus 1'),
(27, 'CE', 'MATH2103', 'Differential Equations', 3, 0, 'None'),
(28, 'CE', 'ENSC2021', 'Computer-Aided Drafting', 0, 3, 'None'),
(29, 'CE', 'ENSC2043', 'Statics of Rigid Bodies', 3, 0, 'None'),
(30, 'CE', 'CIEN2103', 'Surveying (Lec)', 3, 0, 'None'),
(31, 'CE', 'CIEN2111', 'Surveying (Lab)', 0, 3, 'None'),
(32, 'CE', 'HIST1023', 'Life and Works of Rizal', 3, 0, 'None'),
(33, 'CE', 'ENSC2133', 'Engineering Utilities 1 (Basic Electrical Engineering)', 3, 0, 'None'),
(34, 'CE', 'PFIT2102', 'PATHFIT 3 (Sports and Dance)', 2, 0, 'PATHFIT1/PATHFIT 2'),
(35, 'CE', 'ENSC1013', 'Science, Technology, and Society', 3, 0, 'None'),
(36, 'CE', 'CIEN2232', 'Fluid Mechanics (Lec)', 2, 0, 'None'),
(37, 'CE', 'CIEN2231', 'Fluid Mechanics (Lab)', 0, 3, 'None'),
(38, 'CE', 'CIEN2102', 'Geology for Civil Engineers', 2, 0, 'None'),
(39, 'CE', 'ENSC2013', 'Engineering Data Analysis', 3, 0, 'Differential and Integral Calculus 2'),
(40, 'CE', 'ENSC2163', 'Engineering Utilities 2 (Basic Mechanical Engineering)', 3, 0, 'Physics 2(Lec & Lab)'),
(41, 'CE', 'ENSC2082', 'Dynamics of Rigid Bodies', 2, 0, 'Statics of Rigid Bodies'),
(42, 'CE', 'ENSC2104', 'Mechanics of Deformable Bodies', 4, 0, 'Statics of Rigid Bodies'),
(43, 'CE', 'CIEN2212', 'Construction Materials and Testing (Lec)', 2, 0, 'Co-Requisite: Mechanics of Deformable Bodies'),
(44, 'CE', 'CIEN2211', 'Construction Materials and Testing (Lab)', 0, 3, 'Co-Requisite: Mechanics of Deformable Bodies'),
(45, 'CE', 'CIEN2222', 'Numerical Solutions (Lec)', 2, 0, 'Differential Equations'),
(46, 'CE', 'CIEN2221', 'Numerical Solutions (Lab)', 0, 3, 'Differential Equations'),
(47, 'CE', 'GECE2203', 'GEC Free Elective 1 (People and the Earth Ecosystem)', 3, 0, 'None'),
(48, 'CE', 'PFIT2202', 'PATHFIT 4 (Team Sports and Outdoor Adventure Activities)', 2, 0, 'PATHFIT 1/PATHFIT2'),
(49, 'CE', 'PHIL1013', 'Ethics', 3, 0, 'None'),
(50, 'CE', 'CIEN 3122', 'Structural Theory I Lec', 3, 0, 'Mechanics of Deformable Bodies'),
(51, 'CE', 'CIEN 3121', 'Structural Theory I Lab', 0, 3, NULL),
(52, 'CE', 'CIEN 3903', 'Engineering Economics', 3, 0, '3rd Year Standing'),
(53, 'CE', 'CIEN 3110', 'Computer-Aided Drafting/Surveying lec', 0, 3, NULL),
(54, 'CE', 'CIEN 3141', 'Building Systems Design I Lab', 0, 3, NULL),
(55, 'CE', 'CIEN 3111', 'Geotechnical Engineering I (Soil Mechanics) Lec', 3, 0, 'Mechanics of Deformable Bodies'),
(56, 'CE', 'CIEN 3111', 'Geotechnical Engineering I (Soil Mechanics) Lab', 0, 3, 'Purdue/Computerized Engineering Data'),
(57, 'CE', 'CIEN 3132', 'CE Engineering Research', 1, 0, 'Co-req: Structural Theory I (lec & lab)'),
(58, 'CE', 'CIEN 3134', 'Hydraulics Lec', 4, 0, 'Fluid Mechanics'),
(59, 'CE', 'CIEN 3133', 'Hydraulics Lab', 0, 3, 'Co-Requisite Hydraulics Lec & Lab'),
(60, 'CE', 'CIEN 3123', 'Hydrology', 3, 0, NULL),
(61, 'CE', 'CIEN 3242', 'Structural Theory II Lec', 3, 0, 'Structural Theory I (lec & lab)'),
(62, 'CE', 'CIEN 3241', 'Structural Theory II Lab', 0, 3, NULL),
(63, 'CE', 'CIEN 3232', 'Highway and Railroad Engineering', 3, 0, 'Surveying (lec & lab)'),
(64, 'CE', 'CIEN 3223', 'Geotechnical Engineering II (Rock Mechanics)', 3, 0, 'Geotechnical Engineering I (lec & lab)'),
(65, 'CE', 'CIEN 3222', 'Hydraulic Structures', 2, 0, NULL),
(66, 'CE', 'CIEN 3252', 'Matrix Analysis of Structures', 2, 0, 'Structural Theory II & Numerical Solutions'),
(67, 'CE', 'CIEN 3251', 'Principles of Reinforced/Prestressed Concrete Lec', 3, 0, 'Co-req: Structural Theory II (lec & lab)'),
(68, 'CE', 'CIEN 3221', 'Principle of Reinforced/Prestressed Concrete Lab', 0, 3, NULL),
(69, 'CE', 'CIEN 3211', 'Quantity Surveying Lec', 0, 3, 'Building Systems Design I (lec & Lab)'),
(70, 'CE', 'CIEN 3271', 'Quantity Surveying Lab', 0, 3, 'Numerical Solutions'),
(71, 'CE', 'CIEN 3291', 'CE Selective Course I (Mathematics, Surveying, and Transportation Engineering)', 2, 0, 'Co-req: Highway and Railroad Engineering'),
(72, 'CE', 'CIEN 3292', 'CE Law, Ethics, and Contracts', 2, 0, '3rd Year Standing'),
(73, 'CE', 'CIEN 3012', 'On-the-Job Training', 0, 300, 'Building Systems Design (Lec & Lab), Structural Theory I (lec & lab)'),
(74, 'CE', 'CIEN 4102', 'CE Project 1 (Capstone Design Project 1)', 1, 3, 'Civil Engineering Research, Structural Theory II (lec & lab)'),
(75, 'CE', 'CIEN 4133', 'Professional Course-Specialized 1 (Structure Design of Towers and other Vertical Structures/Earthquake Engineering)', 3, 0, 'Co-Req: Principle of Steel & Timber Design (lec & lab)'),
(76, 'CE', 'CIEN 4143', 'Professional Course-Specialized 2 (Foundation and Engineering/Soil Design)', 3, 0, 'Co-req: Foundation Engineering'),
(77, 'CE', 'CIEN 4223', 'Professional Course-Specialized 3 (Geo-Environmental Engineering)', 3, 0, 'Geotechnical Engineering 2'),
(78, 'CE', 'CIEN 4144', 'Foundation Engineering', 3, 0, 'Geotechnical Engineering 2'),
(79, 'CE', 'CIEN 4251', 'Thermodynamics', 2, 0, 'None'),
(80, 'CE', 'CIEN 4122', 'Principle of Steel & Timber Design Lec', 3, 0, 'Structural Theory II (lec & la)'),
(81, 'CE', 'CIEN 4121', 'Principle of Steel & Timber Design Lab', 0, 3, NULL),
(82, 'CE', 'CIEN 4153', 'Principle of Transportation Engineering', 3, 0, 'Highway and Railroad Engineering'),
(83, 'CE', 'CIEN 4101', 'CE Integrative Course 2 (Hydraulics, Geotechnical Engineering, Structural Engineering and Construction)', 0, 3, 'Principle of Reinforced/Prestressed Concrete Design, Principle of Transportation Engineering and CE Integrative Course 1'),
(84, 'CE', 'CIEN 4212', 'CE Project 2 (Capstone Design Project 2)', 2, 0, 'CE Project 2'),
(85, 'CE', 'CIEN 4233', 'Professional Course- specialized 4 (Computer Softwares in Structural Analysis)', 3, 0, 'Principle of Steel & Timber Design (lec & lab),Principle of Transportation Engineering'),
(86, 'CE', 'CIEN 4243', 'Professional Course- specialized 5 (Bridge Engineering/Design of Steel Structures)', 3, 0, 'Reinforced Concrete Design, Foundation Engineering, Timber Design'),
(87, 'CE', 'CIEN 4211', 'CE Integrative Course 3 (Mathematics, Surveying, Transportation Engineering, Hydraulics and Environmental Engineering)', 0, 3, 'Principle of Transportation Engineering, CE Integrative 2, Engineering Data Analysis'),
(88, 'CE', 'CIEN 4261', 'CE Site Inspection & Seminar', 0, 3, '4th Year Standing'),
(89, 'CE', 'CIEN 4262', 'GEC Free Elective 3 (Foreign Language)', 2, 0, 'None'),
(90, 'CE', 'CIEN 4291', 'Construction Planning and Management', 1, 0, '4th Year Standing'),
(91, 'CE', 'CIEN 4231', 'Construction Method and Project Management Lab', 0, 3, '4th Year Standing/Quantity Surveying (lec & lab)'),
(92, 'CE', 'CIEN 4292', 'Data Science with Artificial Intelligence', 2, 0, 'Engineering Data Analysis'),
(93, 'CE', 'CIEN 4241', 'Data Science with Artificial Intelligence Lab', 0, 3, NULL);

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
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
