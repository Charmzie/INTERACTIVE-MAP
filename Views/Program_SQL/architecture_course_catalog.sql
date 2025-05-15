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
-- Database: `architecture_course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `program` varchar(3) NOT NULL,
  `course_code` varchar(20) NOT NULL,
  `course_title` varchar(255) NOT NULL,
  `lecture` int(11) DEFAULT 0,
  `laboratory` int(11) DEFAULT 0,
  `studio` int(11) DEFAULT 0,
  `total_units` int(11) GENERATED ALWAYS AS (`lecture` + `laboratory` + `studio`) STORED,
  `co_pre_requisite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `program`, `course_code`, `course_title`, `lecture`, `laboratory`, `studio`, `co_pre_requisite`) VALUES
(1, 'Ar', 'ARCDES01', 'Architectural Design 1 – Introduction to Design', 1, 0, 3, 'None'),
(2, 'Ar', 'ARCVIS01', 'Architectural Visual Communications 1 – Graphics 1', 1, 0, 3, 'None'),
(3, 'Ar', 'ARCVIS02', 'Architectural Visual Communications 2 – Techniques 1', 1, 0, 3, 'None'),
(4, 'Ar', 'TOA1', 'Theory of Architecture 1', 2, 0, 0, 'None'),
(5, 'Ar', 'HOA1', 'History of Architecture 1', 2, 0, 0, 'None'),
(6, 'Ar', 'MATH2053', 'College Algebra', 3, 0, 0, 'None'),
(7, 'Ar', 'MATH1023', 'Plane Trigonometry', 3, 0, 0, 'None'),
(8, 'Ar', 'SOCI1013', 'The Contemporary World', 3, 0, 0, 'None'),
(9, 'Ar', 'NSTP1013', 'National Service Training Program 1', 0, 0, 3, 'None'),
(10, 'Ar', 'PFIT1102', 'PATHFIT 1 (Movement Competency Training)', 2, 0, 0, 'None'),
(11, 'Ar', 'ARAD1202', 'Architectural Design 2 – Creative Design and Fundamentals', 1, 0, 3, 'Architectural Design 1'),
(12, 'Ar', 'ARCVIS1203', 'Architectural Visual Communications 3 – Graphics 2', 2, 0, 3, 'Architectural Visual Communications 1 – Graphics 1'),
(13, 'Ar', 'ARCV1202', 'Architectural Visual Communications 4 – Visual Techniques 2', 1, 0, 3, 'Architectural Visual Communications 2 – Techniques 1'),
(14, 'Ar', 'TOA1202', 'Theory of Architecture 2', 2, 0, 0, 'Theory of Architecture 1'),
(15, 'Ar', 'HOA1202', 'History of Architecture 2', 2, 0, 0, 'History of Architecture 1'),
(16, 'Ar', 'ARBT1203', 'Building Technology 1 – Building Materials', 2, 1, 0, 'None'),
(17, 'Ar', 'HUMA1013', 'Art Appreciation', 3, 0, 0, 'None'),
(18, 'Ar', 'NSTP1023', 'National Service Training Program 2', 0, 0, 3, 'National Service Training Program 1'),
(19, 'Ar', 'PFIT1202', 'PATHFIT 2 (Exercise-Based Fitness Activity)', 2, 0, 0, 'PATHFIT 1'),
(20, 'Ar', 'ARA11202', 'Architectural Interiors', 3, 0, 0, 'Theory of Architecture 1'),
(21, 'Ar', 'MATH2083', 'Calculus (Differential & Integral)', 3, 0, 0, 'Plane and Spherical Trigonometry, Analytic and Solid Geometry'),
(22, 'Ar', 'ARAD2103', 'Architectural Design 3 – Creative Design in Architectural Interiors', 1, 0, 3, 'Architectural Design 2'),
(23, 'Ar', 'ARCCAD1202', 'Computer-Aided Design & Drafting for Architecture 1', 1, 3, 0, 'None'),
(24, 'Ar', 'ARCV2102', 'Architectural Visual Communication 5 – Visual Techniques 3', 1, 0, 3, 'Architectural Visual Communications 4'),
(25, 'Ar', 'MATH1101', 'Mathematics of the Modern World', 3, 0, 0, 'None'),
(26, 'Ar', 'HOA2102', 'History of Architecture 3', 2, 0, 0, 'History of Architecture 2'),
(27, 'Ar', 'MATH1022', 'Solid Mensuration', 2, 0, 0, 'None'),
(28, 'Ar', 'ARBT2103', 'Building Technology 2 – Construction Drawings in Wood, Steel and Concrete (2-Story)', 2, 3, 0, 'Building Technology 1 – Building Materials'),
(29, 'Ar', 'ENGL1103', 'Purposive Communication', 3, 0, 0, 'None'),
(30, 'Ar', 'ARBU2103', 'Building Utilities 1 – Plumbing and Sanitary Systems', 2, 3, 0, 'None'),
(31, 'Ar', 'PFIT2102', 'PATHFIT 3 (Sports and Dance)', 2, 0, 0, 'PATHFIT 1 & PATHFIT 2'),
(32, 'Ar', 'ART2102', 'Tropical Design', 2, 0, 0, 'None'),
(33, 'Ar', 'ARAD2203', 'Architectural Design 4 – Space Planning 1', 1, 0, 3, 'Architectural Design 3'),
(34, 'Ar', 'ARCCAD2202', 'Computer-Aided Design & Drafting for Architecture 2/BIM', 1, 3, 0, 'Computer-Aided Design & Drafting for Architecture 1'),
(35, 'Ar', 'ARSU2203', 'Surveying', 2, 3, 0, 'College and Advanced Algebra'),
(36, 'Ar', 'ENSC2203', 'Statics of Rigid Bodies', 2, 3, 0, 'Plane Trigonometry'),
(37, 'Ar', 'HOA2202', 'History of Architecture 4', 2, 0, 0, 'History of Architecture 3'),
(38, 'Ar', 'HIST1023', 'Life and Works of Rizal', 3, 0, 0, 'None'),
(39, 'Ar', 'ARBT2203', 'Building Technology 3 – Construction Drawings in Wood, Steel and Concrete (2-Story Res. Structure)', 2, 3, 0, 'Building Technology 2'),
(40, 'Ar', 'ARBU2203', 'Building Utilities 2', 2, 3, 0, 'Building Utilities 1'),
(41, 'Ar', 'PHIL1103', 'Ethics', 3, 0, 0, 'None'),
(42, 'Ar', 'PFIT2202', 'PATHFIT 4 (Team Sports and Outdoor Adventure Activities)', 2, 0, 0, 'PATHFIT 1 & PATHFIT 2'),
(43, 'Ar', 'ARAD3104', 'Architectural Design 5 – Space Planning 2', 1, 0, 9, 'Architectural Design 4'),
(44, 'Ar', 'ARAD 3104', 'Architectural Design 5 - Space Planning 2', 1, 0, 9, 'Architectural Design 4'),
(45, 'Ar', 'ENSC 3103', 'Strength of Materials', 3, 0, 0, 'Statics of Rigid Bodies'),
(46, 'Ar', 'ENSC 1913', 'Science, Technology, Society', 3, 0, 0, 'None'),
(47, 'Ar', 'HIST 1013', 'Reading in Philippine History', 3, 0, 0, 'None'),
(48, 'Ar', 'ARBT 3103', 'Building Technology 4 - Specification Writing and Quantity Surveying', 2, 0, 3, 'Building Technology 3'),
(49, 'Ar', 'PSYC 1013', 'Understanding the Self', 3, 0, 0, 'None'),
(50, 'Ar', 'ARBU 3103', 'Building Utilities 2 (BU 2) - Electrical, Electronics, and Mechanical System ', 2, 0, 3, 'Building Utilities 1'),
(51, 'Ar', 'ARAD3204', 'Architectural Design 6 – Site Development Planning and Landscaping', 1, 0, 9, 'Architectural Design 5 - Space Planning 2'),
(52, 'Ar', 'ARTS3203', 'Theory of Structures', 3, 0, 0, 'Statics of Rigid Bodies'),
(53, 'Ar', 'ARPP3203', 'Professional Practice 1 (Laws Affecting the Practice of Architecture)', 3, 0, 0, 'None'),
(54, 'Ar', 'ARSP3203', 'Specialization 1', 3, 0, 0, 'Architectural Design 5'),
(55, 'Ar', 'ARBU3204', 'Builiding Utilities 3 (BU 3) - Acoustics and Lighting Systems', 3, 3, 0, 'Building Utilities 2 (BU 2)'),
(56, 'Ar', 'ARPL3203', 'Planning 1 - Site Planning & Landscape Architecture', 3, 0, 0, 'Surveying Tropical Architecture'),
(57, 'Ar', 'ARAD4105', 'Architectural Design 7 – Community Architecture and Urban Design', 1, 0, 12, 'Architectural Design 6'),
(58, 'Ar', 'ARRM4103', 'Research Methods for Architecture', 3, 0, 0, '4th year standing'),
(59, 'Ar', 'ARST4103', 'Steel and Timber Design', 3, 0, 0, 'Theory of Structures'),
(60, 'Ar', 'ARPP4103', 'Professional Practice 2 (Administering the Regular Services of the Architect)', 3, 0, 0, 'Professional Practice 1'),
(61, 'Ar', 'ARSP4103', 'Specialization 2', 3, 0, 0, 'Specialization 1'),
(62, 'Ar', 'ARBT4103', 'Building Technology 5 - Alternative Building Construction Systems', 2, 0, 3, 'Building Technology 3'),
(63, 'Ar', 'ARPL4103', 'Planning 2', 3, 0, 0, 'Planning 1'),
(64, 'Ar', 'ARAD4205', 'Architectural Design 8 – Design of Complex Structures', 1, 0, 12, 'Architectural Design 7'),
(65, 'Ar', 'GECE2203', 'GEC Free Elective (People and the Earth Ecosystem)', 3, 0, 0, 'None'),
(66, 'Ar', 'ARAS4203', 'Architectural Structures', 3, 0, 0, 'Steel and Timber Design'),
(67, 'Ar', 'ARPP4203', 'Professional Practice 3 (Global Practice in the 21st Century)', 3, 0, 0, 'Professional Practice 2'),
(68, 'Ar', 'ARSP4203', 'Specialization 3', 3, 0, 0, 'Specialization 2'),
(69, 'Ar', 'ARPL4203', 'Planning 3 - Introduction to Urban & Regional Planning', 3, 0, 0, 'Planning 2'),
(70, 'Ar', 'ARAP4215', 'Apprenticeship', 3, 0, 0, 'Professional Practice 3'),
(71, 'Ar', 'ARAD5105', 'Architectural Design 9 – Thesis Research Writing', 1, 0, 12, 'All Courses in 1st to 4th year level'),
(72, 'Ar', 'GECE2213', 'GEC Free Elective 2 (Gender and Society)', 3, 0, 0, 'None'),
(73, 'Ar', 'ARAS4203', 'Architectural Structures', 3, 0, 0, 'Steel and Timber Design'),
(74, 'Ar', 'ARBM5103', 'Business Management & Application for Architecture 1)', 3, 0, 0, 'Professional Practice 3'),
(75, 'Ar', 'ARIC5102', 'Integrative Course 1', 0, 6, 0, '5th year standing'),
(76, 'Ar', 'ARHO5102', 'Housing', 2, 0, 0, 'Planning 2 & Professional Practice 1'),
(77, 'Ar', 'ARAD4105', 'Architectural Design 7 – Community Architecture and Urban Design', 1, 0, 12, 'Architectural Design 6'),
(78, 'Ar', 'ARRM4103', 'Research Methods for Architecture', 3, 0, 0, '4th year standing'),
(79, 'Ar', 'ARST4103', 'Steel and Timber Design', 3, 0, 0, 'Theory of Structures'),
(80, 'Ar', 'ARPP4103', 'Professional Practice 2 (Administering the Regular Services of the Architect)', 3, 0, 0, 'Professional Practice 1'),
(81, 'Ar', 'ARSP4103', 'Specialization 2', 3, 0, 0, 'Specialization 1'),
(82, 'Ar', 'ARBT4103', 'Building Technology 5 - Alternative Building Construction Systems', 2, 0, 3, 'Building Technology 3'),
(83, 'Ar', 'ARPL4103', 'Planning 2', 3, 0, 0, 'Planning 1'),
(84, 'Ar', 'ARAD4205', 'Architectural Design 8 – Design of Complex Structures', 1, 0, 12, 'Architectural Design 7'),
(85, 'Ar', 'GECE2203', 'GEC Free Elective (People and the Earth Ecosystem)', 3, 0, 0, 'None'),
(86, 'Ar', 'ARAS4203', 'Architectural Structures', 3, 0, 0, 'Steel and Timber Design'),
(87, 'Ar', 'ARPP4203', 'Professional Practice 3 (Global Practice in the 21st Century)', 3, 0, 0, 'Professional Practice 2'),
(88, 'Ar', 'ARSP4203', 'Specialization 3', 3, 0, 0, 'Specialization 2'),
(89, 'Ar', 'ARPL4203', 'Planning 3 - Introduction to Urban & Regional Planning', 3, 0, 0, 'Planning 2'),
(90, 'Ar', 'ARAP4215', 'Apprenticeship', 3, 0, 0, 'Professional Practice 3'),
(91, 'Ar', 'ARAD5105', 'Architectural Design 9 – Thesis Research Writing', 1, 0, 12, 'All Courses in 1st to 4th year level'),
(92, 'Ar', 'GECE2213', 'GEC Free Elective 2 (Gender and Society)', 3, 0, 0, 'None'),
(93, 'Ar', 'ARAS4203', 'Architectural Structures', 3, 0, 0, 'Steel and Timber Design'),
(94, 'Ar', 'ARBM5103', 'Business Management & Application for Architecture 1)', 3, 0, 0, 'Professional Practice 3'),
(95, 'Ar', 'ARIC5102', 'Integrative Course 1', 0, 6, 0, '5th year standing'),
(96, 'Ar', 'ARHO5102', 'Housing', 2, 0, 0, 'Planning 2 & Professional Practice 1'),
(97, 'Ar', 'ARAD5205', 'Architectural Design 10 – Thesis Research Application', 1, 0, 12, 'Architectural Design 9 - Thesis Research Writing'),
(98, 'Ar', 'GECE4103', 'GEC Free Elective 3 (Foreign Language)', 3, 0, 0, 'None'),
(99, 'Ar', 'ARBM5203', 'Business Management & Application for Architecture 2)', 3, 0, 0, 'Professional Practice 3'),
(100, 'Ar', 'ARIC5202', 'Integrative Course 2', 0, 6, 0, '5th year standing');

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
