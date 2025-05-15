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
-- Database: `electronics_engineering_course_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `program` varchar(5) DEFAULT NULL,
  `course_code` varchar(10) NOT NULL,
  `course_title` varchar(255) NOT NULL,
  `lecture_units` int(11) NOT NULL,
  `laboratory_units` int(11) NOT NULL,
  `total_units` int(11) NOT NULL,
  `co_pre_requisite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `program`, `course_code`, `course_title`, `lecture_units`, `laboratory_units`, `total_units`, `co_pre_requisite`) VALUES
(1, 'ECE', 'ENGL 1103', 'Purposive Communication', 3, 0, 3, 'None'),
(2, 'ECE', 'SOCI 1013', 'Contemporary World', 3, 0, 3, 'None'),
(3, 'ECE', 'ECEN 1112', 'Electronics Shopwork', 0, 3, 1, 'None'),
(4, 'ECE', 'MATH 2033', 'College and Advanced Algebra', 3, 0, 3, 'None'),
(5, 'ECE', 'MATH 2044', 'Plane & Spherical Trigonometry, Analytic & Solid Geometry', 4, 0, 4, 'None'),
(6, 'ECE', 'MATH 1013', 'Mathematics in the Modern World', 3, 0, 3, 'None'),
(7, 'ECE', 'PSYC 1013', 'Understanding the Self', 3, 0, 3, 'None'),
(8, 'ECE', 'NSTP 1013', 'National Service Training Program 1', 3, 0, 3, 'None'),
(9, 'ECE', 'PFIT 1102', 'PATHFit 1: Movement Competency Training', 2, 0, 2, 'None'),
(10, 'ECE', 'NASC 2013', 'Chemistry for Engineers (lec)', 3, 0, 3, 'None'),
(11, 'ECE', 'NASC 2011', 'Chemistry for Engineers (lab)', 0, 1, 1, 'None'),
(12, 'ECE', 'NASC 2053', 'Physics for Engineers (lec)', 3, 0, 3, 'None'),
(13, 'ECE', 'NASC 2051', 'Physics for Engineers (lab)', 0, 1, 1, 'None'),
(14, 'ECE', 'MATH 2074', 'Differential and Integral Calculus 1', 4, 0, 4, 'pre-req: Math 2033; Math 2044'),
(15, 'ECE', 'ENSC 2192', 'Computer Fundamentals and Programming', 2, 1, 3, 'None'),
(16, 'ECE', 'ENSC 1013', 'Science, Technology, and Society', 3, 0, 3, 'None'),
(17, 'ECE', 'HIST 1023', 'Life and Works of Rizal', 3, 0, 3, 'None'),
(18, 'ECE', 'HIST 1013', 'Readings in Philippine History', 3, 0, 3, 'None'),
(19, 'ECE', 'HUMA 1013', 'Art Appreciation', 3, 0, 3, 'None'),
(20, 'ECE', 'NSTP 1023', 'National Service Training Program 2', 3, 0, 3, 'pre-req: NSTP 1013'),
(21, 'ECE', 'PFIT 1202', 'PATHFit 2: Exercise-Based Fitness Activity', 2, 0, 2, 'pre-req: PATHFit 1'),
(22, 'ECE', 'NASC 2063', 'Physics 2 (lec)', 3, 0, 3, 'pre-req: Physics for Engineers'),
(23, 'ECE', 'NASC 2061', 'Physics 2 (lab)', 0, 1, 1, 'pre-req: Physics for Engineers'),
(24, 'ECE', 'MATH 2094', 'Differential and Integral Calculus 2', 4, 0, 4, 'pre-req: MATH 2074'),
(25, 'ECE', 'ENSC 2013', 'Engineering Data Analysis', 3, 0, 3, 'pre-req: Math 2074'),
(26, 'ECE', 'MATH 2103', 'Differential Equations', 3, 0, 3, 'pre-req: Math 2094'),
(27, 'ECE', 'ENSC 2022', 'Computer-Aided Drafting', 0, 3, 1, 'None'),
(28, 'ECE', 'ECEN 2113', 'Circuits 1 (Lec)', 3, 0, 3, 'pre-req: Physics 2'),
(29, 'ECE', 'ECEN 2111', 'Circuits 1 (Lab)', 0, 3, 1, 'pre-req: Physics 2'),
(30, 'ECE', 'ECEN 2103', 'Electronics 1: Electronic Devices and Circuits (Lec)', 3, 0, 3, 'co-req: Circuits 1'),
(31, 'ECE', 'ECEN 2101', 'Electronics 1: Electronic Devices and Circuits (Lab)', 0, 3, 1, 'co-req: Circuits 1'),
(32, 'ECE', 'ENVI 2103', 'Environmental Science and Engineering', 3, 0, 3, 'None'),
(33, 'ECE', 'ENSC 2292E', 'Advanced Programming for ECE (MATLab & LabVIEW)', 0, 6, 2, 'None'),
(34, 'ECE', 'ENSC 2063', 'Engineering Economics', 3, 0, 3, 'None'),
(35, 'ECE', 'PFIT 2102', 'PATHFit 3: Sports and Dance', 2, 0, 2, 'pre-req: PATHFit 1 & 2'),
(36, 'ECE', 'ECEN 2243', 'Advanced Engineering Mathematics for ECE (Lec)', 3, 0, 3, 'pre-req: MATH 2103'),
(37, 'ECE', 'ECEN 2241', 'Advanced Engineering Mathematics for ECE (Lab)', 0, 1, 1, 'pre-req: MATH 2103'),
(38, 'ECE', 'ECEN 2203', 'Electronics 2: Electronic Circuit Analysis and Design (Lec)', 3, 0, 3, 'co-req: Electronics 2'),
(39, 'ECE', 'ECEN 2201', 'Electronics 2: Electronic Circuit Analysis and Design (Lab)', 0, 3, 1, 'co-req: Electronics 2'),
(40, 'ECE', 'ECEN 2253', 'Circuits 2 (Lec)', 3, 0, 3, 'pre-req: Circuits 1'),
(41, 'ECE', 'ECEN 2251', 'Circuits 2 (Lab)', 0, 3, 1, 'pre-req: Circuits 1'),
(42, 'ECE', 'ECEN 2213', 'Digital Electronics 1: Logic Circuits and Switching Theory (Lec)', 3, 0, 3, 'pre-req: Electronics 1'),
(43, 'ECE', 'ECEN 2211', 'Digital Electronics 1: Logic Circuits and Switching Theory (Lab)', 0, 3, 1, 'pre-req: Electronics 1'),
(44, 'ECE', 'ECEN 2234', 'Electromagnetics', 4, 0, 4, 'pre-req: Electronics 1'),
(45, 'ECE', 'ECEN 2223', 'Communications 1: Principles of Communication Systems (Lec)', 3, 0, 3, 'None'),
(46, 'ECE', 'ECEN 2221', 'Communications 1: Principles of Communication Systems (Lab)', 0, 3, 1, 'None'),
(47, 'ECE', 'ENSC 2072', 'Engineering Management', 2, 0, 2, 'pre-req: Engineering Economics'),
(48, 'ECE', 'PFIT 2202', 'PATHFit 4: Team Sports and Outdoor Adventure Activities', 2, 0, 2, 'pre-req: PATHFit 1 & 2'),
(49, 'ECE', 'ECEN 3142', 'ECE Integrative Course 1', 0, 6, 2, 'pre-req: ECEN 2243, ECEN 2241, ENSC 2013'),
(50, 'ECE', 'ECEN 3133', 'Digital Electronics 2: Microprocessor, Microcontroller Systems & Design (Lec)', 3, 0, 3, 'pre-req: Digital Electronics 1'),
(51, 'ECE', 'ECEN 3131', 'Digital Electronics 2: Microprocessor, Microcontroller Systems & Design (Lab)', 0, 3, 1, 'pre-req: Digital Electronics 1'),
(52, 'ECE', 'ECEN 3163', 'Materials Science and Engineering', 3, 0, 3, 'pre-req: Chemistry'),
(53, 'ECE', 'ECEN 3103', 'Methods of Research', 3, 0, 3, 'pre-req: ENGL 1103; ENSC 2013'),
(54, 'ECE', 'ECEN 3153', 'Electronics 3: Electronic Systems and Design (Lec)', 3, 0, 3, 'pre-req: Electronics 2'),
(55, 'ECE', 'ECEN 3151', 'Electronics 3: Electronic Systems and Design (Lab)', 0, 3, 1, 'pre-req: Electronics 2'),
(56, 'ECE', 'ECEN 3123', 'Signals, Spectra, Signal Processing (Lec)', 3, 0, 3, 'pre-req: Mathematics'),
(57, 'ECE', 'ECEN 3121', 'Signals, Spectra, Signal Processing (Lab)', 0, 3, 1, 'pre-req: Mathematics'),
(58, 'ECE', 'ECEN 3113', 'Communications 2: Modulation and Coding Techniques (Lec)', 3, 0, 3, 'pre-req: Communications 1'),
(59, 'ECE', 'ECEN 3111', 'Communications 2: Modulation and Coding Techniques (Lab)', 0, 3, 1, 'pre-req: Communications 1'),
(60, 'ECE', 'ECEN 3253', 'ECE Elective 1: Analog IC Design (Lec)', 3, 0, 3, 'None'),
(61, 'ECE', 'ECEN 3251', 'ECE Elective 1: Analog IC Design (Lab)', 0, 3, 1, 'None'),
(62, 'ECE', 'ECEN 3223', 'Communications 4: Transmission Media and Antenna System & Design (Lec)', 3, 0, 3, 'pre-req: Digital Electronics 2, Electronics 3'),
(63, 'ECE', 'ECEN 3221', 'Communications 4: Transmission Media and Antenna System & Design (Lab)', 0, 3, 1, 'pre-req: Digital Electronics 2, Electronics 3'),
(64, 'ECE', 'ECEN 3233', 'Feedback and Control Systems (Lec)', 3, 0, 3, 'pre-req: Communications 2'),
(65, 'ECE', 'ECEN 3231', 'Feedback and Control Systems (Lab)', 0, 3, 1, 'pre-req: Communications 2'),
(66, 'ECE', 'ECEN 3201', 'Design 1/Capstone Project 1', 0, 3, 1, 'pre-req: Methods of Research, 3rd Year Standing'),
(67, 'ECE', 'ECEN 3263', 'ECE Laws, Contract, Ethics, Standards, and Safety', 3, 0, 3, 'co-req: Design 1/Capstone Project 1'),
(68, 'ECE', 'ECEN 3213', 'Communications 3: Data Communications (Lec)', 3, 0, 3, 'pre-req: Communications 2'),
(69, 'ECE', 'ECEN 3211', 'Communications 3: Data Communications (Lab)', 0, 3, 1, 'pre-req: Communications 2'),
(70, 'ECE', 'GECE 2203', 'GEC Elective 1 (Gender and Society)', 3, 0, 3, 'None'),
(71, 'ECE', 'ECEN 4183', 'Broadcast Production, Transmission and Distribution Engineering (Lec)', 3, 0, 3, 'pre-req: Communications 4, Communications 3'),
(72, 'ECE', 'ECEN 4181', 'Broadcast Production, Transmission and Distribution Engineering (Lab)', 0, 3, 1, 'pre-req: Communications 4, Communications 3'),
(73, 'ECE', 'ECEN 4101', 'Design 2/Capstone Project 2', 0, 3, 1, 'pre-req: Design 1/Capstone Project 1'),
(74, 'ECE', 'ECEN 4173', 'Advanced Instrumentation, Control, and Robotics Technology (Lec)', 3, 0, 3, 'pre-req: Electronics 3, Feedback and Control Systems'),
(75, 'ECE', 'ECEN 4171', 'Advanced Instrumentation, Control, and Robotics Technology (Lab)', 0, 3, 1, 'pre-req: Electronics 3, Feedback and Control Systems'),
(76, 'ECE', 'ECEN 4143', 'ECE Elective 2: Digital IC Design (Lec)', 3, 0, 3, 'pre-req: Digital Electronics 2, Electronics 3'),
(77, 'ECE', 'ECEN 4141', 'ECE Elective 2: Digital IC Design (Lab)', 0, 3, 1, 'pre-req: Digital Electronics 2, Electronics 3'),
(78, 'ECE', 'ECEN 4163', 'Introduction to Data Science, Artificial Intelligence, and Machine Learning (Lec)', 3, 0, 3, 'None'),
(79, 'ECE', 'ECEN 4161', 'Introduction to Data Science, Artificial Intelligence, and Machine Learning (Lab)', 0, 3, 1, 'None'),
(80, 'ECE', 'GECE 2213', 'GEC Elective 2: Technical Writing', 3, 0, 3, 'None'),
(81, 'ECE', 'PHIL 1013', 'Ethics', 3, 0, 3, 'None'),
(82, 'ECE', 'ECEN 4202', 'ECE Integrative Course 2', 0, 6, 2, 'Fourth Year Standing'),
(83, 'ECE', 'ECEN 4233', 'Advanced Communications System and Design (Lec)', 3, 0, 3, 'pre-req: Communications 4, Communications 3'),
(84, 'ECE', 'ECEN 4231', 'Advanced Communications System and Design (Lab)', 0, 3, 1, 'pre-req: Communications 4, Communications 3'),
(85, 'ECE', 'ECEN 4221', 'ECE Field Trips and Seminars', 0, 3, 1, 'Fourth Year Standing'),
(86, 'ECE', 'GECE 4203', 'GEC Elective 3: People and the Earth\'s Ecosystem', 3, 0, 3, 'None'),
(87, 'ECE', 'ECEN 4211', 'Emerging Technologies', 3, 0, 3, 'Fourth Year Standing'),
(88, 'ECE', 'ENSC 4003', 'Technopreneurship 101', 3, 0, 3, 'co-req: Advanced Instrumentation, Control, and Robotics Technology');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
