-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 12, 2020 at 12:12 PM
-- Server version: 5.6.41-84.1-log
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trivedis_scholarship_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_apply_scholarship`
--

CREATE TABLE `tbl_apply_scholarship` (
  `apply_id` int(11) NOT NULL,
  `sc_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `apply_date` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_apply_scholarship`
--

INSERT INTO `tbl_apply_scholarship` (`apply_id`, `sc_id`, `student_id`, `apply_date`, `status`) VALUES
(1, 2, 1, '2020-03-31', 'pending'),
(2, 3, 1, '2020-04-01', 'pending'),
(4, 2, 1, '2020-04-03', 'pending'),
(5, 2, 1, '2020-04-03', 'pending'),
(6, 1, 1, '2020-04-04', 'pending'),
(7, 1, 10, '2020-04-04', 'pending'),
(8, 1, 29, '2020-04-07', 'pending'),
(9, 1, 15, '2020-04-07', 'pending'),
(10, 3, 15, '2020-04-07', 'pending'),
(11, 1, 22, '2020-04-07', 'pending'),
(12, 1, 22, '2020-04-07', 'pending'),
(13, 5, 22, '2020-04-07', 'pending'),
(14, 6, 33, '2020-04-07', 'pending'),
(15, 1, 29, '2020-04-07', 'pending'),
(16, 1, 31, '2020-04-07', 'pending'),
(17, 1, 29, '2020-04-09', 'pending'),
(18, 1, 29, '2020-04-09', 'pending'),
(19, 1, 29, '2020-04-09', 'pending'),
(20, 1, 36, '2020-04-09', 'pending'),
(21, 1, 34, '2020-04-09', 'pending'),
(22, 1, 34, '2020-04-09', 'pending'),
(23, 1, 34, '2020-04-09', 'pending'),
(24, 1, 34, '2020-04-09', 'pending'),
(25, 1, 34, '2020-04-09', 'pending'),
(26, 1, 38, '2020-04-10', 'pending'),
(27, 2, 36, '2020-04-11', 'pending'),
(28, 1, 1, '2020-04-11', 'pending'),
(29, 1, 24, '2020-04-12', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_document`
--

CREATE TABLE `tbl_document` (
  `document_id` int(11) NOT NULL,
  `doc_type` varchar(100) NOT NULL,
  `doc_url` text NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_document`
--

INSERT INTO `tbl_document` (`document_id`, `doc_type`, `doc_url`, `student_id`) VALUES
(1, 'PG Degree', 'docs/5e889b423c048.png', 1),
(2, '10th Marksheet', 'docs/5e8d85629416e.png', 22);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_education`
--

CREATE TABLE `tbl_education` (
  `education_id` int(11) NOT NULL,
  `degree` varchar(100) NOT NULL,
  `class_college` varchar(255) NOT NULL,
  `is_your_present_class` int(1) NOT NULL,
  `passing_year` varchar(4) NOT NULL,
  `marks` varchar(10) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_education`
--

INSERT INTO `tbl_education` (`education_id`, `degree`, `class_college`, `is_your_present_class`, `passing_year`, `marks`, `student_id`) VALUES
(1, 'BCOM', 'LJ College', 1, '2012', '73%', 1),
(2, 'Graduation', 'Class 12 Passed', 1, '2016', '73%', 10),
(3, 'Class 4', 'KG', 2, '5668', '86868', 18),
(4, 'Graduation', 'Graduation', 0, '2020', '90', 15),
(5, 'Class 1', 'Class 3', 2, '55', '22', 31),
(6, 'Post Graduation', 'Post Graduation', 0, '2022', '60', 22),
(7, 'Graduation', 'Graduation', 2, '2020', '83', 38);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_family_earning`
--

CREATE TABLE `tbl_family_earning` (
  `family_earning_id` int(11) NOT NULL,
  `member_name` varchar(100) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `occupation` varchar(100) NOT NULL,
  `relation_with_candidate` varchar(100) NOT NULL,
  `income` varchar(10) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_family_earning`
--

INSERT INTO `tbl_family_earning` (`family_earning_id`, `member_name`, `qualification`, `occupation`, `relation_with_candidate`, `income`, `student_id`) VALUES
(1, 'Chirag bhai', 'BCOM', 'Business', 'Father', '50000', 1),
(2, '4', 'Graduation', 'Others', '', '100000', 22);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `doc_id` int(11) NOT NULL,
  `f_date` date NOT NULL,
  `details` text NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`doc_id`, `f_date`, `details`, `student_id`) VALUES
(1, '2020-03-28', 'Thank for giving scholarship', 1),
(2, '2020-03-31', 'test', 1),
(3, '2020-03-31', 'iii', 1),
(4, '2020-03-31', 'test', 1),
(5, '2020-04-03', 'heloo', 1),
(6, '2020-04-07', 'yygh', 29),
(7, '2020-04-09', 'nice godd', 22),
(8, '2020-04-09', 'ðŸ¤”ðŸ‘¡ðŸ§¡ðŸ˜¥ðŸ§¡ðŸ˜¥â˜¹ðŸ‘¡ðŸ§’ðŸ¤”ðŸ‘¡ðŸ§¡ðŸ¤”ðŸ‘¡ðŸ§’ðŸ¤”ðŸ‘¡ðŸ˜ðŸ¤”', 22),
(10, '2020-04-09', '4g', 22);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_slider`
--

CREATE TABLE `tbl_home_slider` (
  `slider_id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_home_slider`
--

INSERT INTO `tbl_home_slider` (`slider_id`, `image`) VALUES
(1, 'b1.jpg'),
(2, 'b2.jpg'),
(3, 'b3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_intrest`
--

CREATE TABLE `tbl_intrest` (
  `intrest_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `merit_based` int(1) NOT NULL,
  `means_based` int(1) NOT NULL,
  `cultural_talent` int(1) NOT NULL,
  `visual_art` int(1) NOT NULL,
  `literacy_art` int(1) NOT NULL,
  `sport_talent` int(1) NOT NULL,
  `science_maths_based` int(1) NOT NULL,
  `technology_based` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_intrest`
--

INSERT INTO `tbl_intrest` (`intrest_id`, `student_id`, `merit_based`, `means_based`, `cultural_talent`, `visual_art`, `literacy_art`, `sport_talent`, `science_maths_based`, `technology_based`) VALUES
(1, 1, 0, 0, 1, 1, 0, 0, 0, 0),
(2, 18, 1, 1, 1, 1, 0, 0, 0, 0),
(3, 33, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 22, 0, 0, 0, 0, 0, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_personal_info`
--

CREATE TABLE `tbl_personal_info` (
  `personal_info_id` int(11) NOT NULL,
  `student_id` bigint(55) NOT NULL,
  `adharno` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `address` text NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `state` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `religion` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `family_income` varchar(100) NOT NULL,
  `are_you_physically_challenged` int(1) NOT NULL,
  `are_you_looking_abroad_student` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_personal_info`
--

INSERT INTO `tbl_personal_info` (`personal_info_id`, `student_id`, `adharno`, `dob`, `address`, `pincode`, `state`, `district`, `city`, `religion`, `category`, `gender`, `family_income`, `are_you_physically_challenged`, `are_you_looking_abroad_student`) VALUES
(1, 1, '1asdasd', '1992-04-01', 'Maninagar', '380008', 'Gujarat', 'Ahmedabad', 'Ahmedabad', 'hindu', 'general', 'male', '5000', 0, 0),
(4, 10, '1asdasd', '1994-11-01', 'Maninagar', '380008', 'Gujarat', 'Ahmedabad', 'Ahmedabad', 'hindu', 'general', 'male', '5000', 1, 1),
(5, 11, '1asdasd', '1995-02-12', 'Maninagar', '380008', 'Gujarat', 'Ahmedabad', 'Ahmedabad', 'hindu', 'general', 'male', '5000', 0, 0),
(6, 22, '497654123346', '0000-00-00', '234567891234', '8282828282', 'Bihar', 'Bihar', 'Bihar', 'Hindu', 'OBC-C', 'Female', '100000', 1, 1),
(7, 38, '671752828928', '0000-00-00', 'jjaj', '634949', 'Gujrat', 'Gujrat', 'Ahmedabad', 'Hindu', 'General', 'Male', '100000', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reference`
--

CREATE TABLE `tbl_reference` (
  `reference_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `occupation` varchar(100) NOT NULL,
  `relation` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_reference`
--

INSERT INTO `tbl_reference` (`reference_id`, `student_id`, `fullname`, `mobile`, `occupation`, `relation`) VALUES
(1, 1, 'Chirag', '3434343434', 'Business', 'Father'),
(2, 24, 'sl', '6355901169', 'Class 12 Passed', 'j1'),
(3, 22, 'karishma ', '9826464646', 'Post Graduation', 'son');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_scholarship`
--

CREATE TABLE `tbl_scholarship` (
  `s_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `photo` text NOT NULL,
  `income_details` varchar(255) NOT NULL,
  `last_date` date NOT NULL,
  `website` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_scholarship`
--

INSERT INTO `tbl_scholarship` (`s_id`, `name`, `photo`, `income_details`, `last_date`, `website`) VALUES
(1, 'Mukhyamantri Yuva Swavalamban Yojana - MYSY', 'school_1.png', '<p><strong>Minimum Percentage:-<br />\r\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;80 or more Percentile in 12th Science</strong></p>\r\n\r\n<p><strong>scholarship income:-</strong></p>\r\n\r\n<p>If student take admission in MBBS or&', '2020-05-23', 'https://scholarships.gov.in/'),
(2, 'Post-Matric Scholarship FOR OBC', 'index.jpg', '<p><strong>Minimum Percentage:</strong>-NOC<br />\r\n<strong>Required Documents:<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>Self-attested caste certificate issued by the competent authorities<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '2020-05-30', 'https://scholarships.gov.in/'),
(3, 'Digital Gujarat Food Bill Assistance(SEBC)- [only for Medical/Engineering Students', '2.jpg', '<p><strong>Minimum Percentage</strong>:-NOCThe annual family income should compulsorily be less than â‚¹ 2.5 Lakhs.</p>\r\n\r\n<p><strong>Required Documents</strong>:-Residence Certificate<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&am', '2020-04-30', 'https://scholarships.gov.in/'),
(4, 'Digital Gujarat Higher Education Scheme	', 'index.jpg', '<p><strong>Minimum Percentage</strong>:-NOC/The annual family income should compulsorily be less than â‚¹ 2.5 Lakhs.<br />\r\n<strong>Required Documents</strong>:-Residence Certificate<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp', '2020-05-30', 'https://scholarships.gov.in/'),
(5, 'Post Matric Scholarship [applicable only for SC Girl Students', 'index.jpg', '<p><strong>Minimum Percentage</strong>:-NOC/The annual income of the family should compulsorily be less than â‚¹ 2.50 Lakhs.<br />\r\n<strong>Required Documents</strong>:Passport size photograph of the applicant<br />\r\n&nbsp;Marksheet of class 10<br />\r\nMar', '2020-04-30', 'https://scholarships.gov.in/'),
(6, 'Swami Vivekanand Stipend Scheme for ITI Courses', 'index.jpg', '<p><strong>Minimum Percentage</strong>:-noc<br />\r\n<strong>Required Documents</strong>: Self-attested caste certificate issued by the competent authorities<br />\r\nSelf-attested copy of the Aadhaar Card<br />\r\nThe first page of bank passbook/cancelled cheq', '2020-04-30', 'https://scholarships.gov.in/'),
(7, 'Post SSC Scholarship for Girls (NTDNT), Gujarat', 'index.jpg', '<p><strong>Minimum Percentage</strong>:-noc/NTDNT girl students studying at senior secondary level<br />\r\n<strong>Required Documents</strong>:Self-attested caste certificate issued by the competent authorities<br />\r\nSelf-attested copy of the Aadhaar Card', '2020-05-30', 'https://scholarships.gov.in/'),
(8, 'Up to INR 280 per month', 'index.jpg', '<p><strong>Categories</strong>:All<br />\r\n<strong>Gender</strong>:Female<br />\r\n<strong>Degree</strong>:-Be a girl student belonging to NTDMT category.<br />\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Be pursuing a course at', '2020-04-30', 'https://scholarships.gov.in/'),
(9, 'Research Scholarship, Gujarat', 'index.jpg', '<p><strong>Minimum Percentage</strong>:-NOC/Applicants must be a postgraduate and willing to pursue a PhD research in the science field with subjects including; Chemistry, Physics, Biology, Microbiology, Zoology, Mathematics at the university level in Guj', '2020-04-30', 'https://scholarships.gov.in/'),
(10, 'The scholars will receive (variable) financial assistance during their PhD research work', 'index.jpg', '<p><strong>Categories:</strong>ALL<br />\r\n<strong>Gender:</strong>MALE/FEMALE<br />\r\n<strong>Degree:-</strong>Postgraduates in Science</p>\r\n', '2020-04-30', 'https://scholarships.gov.in/');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student`
--

CREATE TABLE `tbl_student` (
  `student_id` bigint(20) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_student`
--

INSERT INTO `tbl_student` (`student_id`, `firstname`, `lastname`, `email`, `mobile`, `password`) VALUES
(1, 'Nisarg', 'Trivedi', 'nisarg@gmail.com', '9978538694', '12345'),
(2, 'darshan', 'trivedi', 'darshan@gmail.com', '9090909090', '123'),
(4, 'rahul', 'ajmera', 'rahul@gmail.com', '9090909090', '123'),
(9, 'khushal', 'khoyani', 'khushallhoyani1223@gmail.com', '7265098378', 'kknk'),
(10, 'khushal', 'k', 'khushal@gmail.com', '9876543210', 'kknk'),
(11, 'harry', 'smith', 'harry@gmail.com', '1234567890', '12345678'),
(12, 'harry', 'smith', 'harry@gmail.com', '1234567890', '12345678'),
(13, 'harry', 'smith', 'harry@gmail.com', '1234567890', '12345678'),
(14, 'harry', 'smith', 'harry@gmail.com', '1234567890', '12345678'),
(15, 'khushal', 'khoyani', 'k@gmail.com', '9999986666', 'kknk'),
(16, 'test', 'test', 'testnisarg@gmail.com', '9978069863', '123'),
(17, 'k', 'k', 'kk@gmail.com', '9986458796', 'kknk'),
(18, 'arrav', 'arrav', 'arrav@gmail.com', '123456798', '12345678'),
(19, ' demo', ' test', 'test@gmail.com', '2559594994', '12345'),
(20, '    demo', '  test', 'test@gmail.com', '3625874198', '123456'),
(21, 'test', 'demo', 'test@gmail.com', '1528976434', '123456'),
(22, 'karishma', 'rao', 'karishma@gmail.com', '9632580741', '123456'),
(23, 'k', 'kh', 'k@gmail.com', '6893458723', 'kknk'),
(24, 'sagar', 'gadhesariya', 'sagarpatel21123@gmail.com', '6355901009', 'sagar123'),
(25, 'Bhargav', 'Patel', 'aha@gmail.com', '79949449', 'bonny2286'),
(26, 'Bhargav', 'Patel', 'aha@gmail.com', '7777777777', 'Bonny2286'),
(27, 'Bonny', 'Patel', 'bbb@gmail.com', '8888888888', 'Bonny2286'),
(28, 'Yogesh', 'Bhojani', 'yogesh1020bhoj@gmail.com', '7226484454', 'yogi@1010'),
(29, 'yogesh', 'Bhojani', 'yogi@gmail.com', '72223666', 'yogi@1020'),
(30, 'Bhargav', 'Patel', 'bon111@gmail.com', '0707070707', '1122'),
(31, 'test', 'test', 'test@gmail.com', '123', '123'),
(32, 'test', 'test', 'test@gmail.com', '123', '123'),
(33, 'Bhavin', 'Bhalsod', 'bhavinbhalsod2311@gmail.com', '7043865964', '123456'),
(34, 'tt', 'tt', 't@gmail.com', '123', '123'),
(35, 'g4f', 'vfgg', 'vhfc@dfg.com', '25848', 'qwerty'),
(36, 'sf', 'ged', 'abhishekrs213@gmail.com', '25868', 'qwerty'),
(37, 'Bhargav', 'Patel', 'xyz@gmail.com', '9767678464', 'Bonnyp2286'),
(38, 'khu', 'k', 'kh@gmail.com', '6834948270', 'kknk');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_token`
--

CREATE TABLE `tbl_token` (
  `token_id` int(11) NOT NULL,
  `studentid` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_token`
--

INSERT INTO `tbl_token` (`token_id`, `studentid`, `token`) VALUES
(1, 1, 'eocGk8BxWhM:APA91bHX0pVdBDRcccn_bmr6W17kKa8Uu0x56AHDczviI7QDf8OhuFiorucfd6RrZ1sSUQMVijnjJoF7W2D94R8zSfs-XtVTWnmwWBezvi44HcsysB6eVprETYu9yZ3ISiJP2NmCPuFB'),
(2, 10, 'cCzqyR8Bu8o:APA91bEMAr5XkkkmHjspaIENlR7saeEyMrf3ru7gNXo6az9MaQuveT8SWmF4AINFym95VMke1FAYH5KfAUJ9FEDhrqbOQgP98ZcCN40nK6KKIEgz7Ttgc89kxf9TUUNPEsO01hoBOjGM'),
(3, 11, 'eUyIKT9tOoY:APA91bEqGcOsEagkOkzc2dvacLgpglSefIBoZhPxYugVYScQ8XoLTb5qbl0QD-xop6u_Knt_SGNaxaL10eL_JbFNuUd6twuKTAeEKhQKVqQS_aZcifblS5QmeVFgPnGY_Sn4eYkCiYv2'),
(4, 15, 'cVmbfvjTKgM:APA91bGzxw73eE3QI5QiP1dHmgLHcQdc4AFNJrDZe0A5OQaZK-sw22K66z_C-I1wyNN5k8W6w9gIYYE2XSBAl8BtJk2BchpU1ziWICOG6ANM0YsB68ZeIr-hXH9CtFyWLkY9DFukucLo'),
(5, 16, 'cNQRXpf3MsA:APA91bG4p4dQpQ6JbynO2bfsqLPjMAGcVQKiaFOB4ovnloshFun5HsROe__6S1xpa335cHXNYpDmKXEJXPqs5zxm-uJl_eGs5X0e56RbkROi-LZoL71r9iSSvCy0OHe4ItC4gCGAOzI-'),
(6, 17, 'cCzqyR8Bu8o:APA91bEMAr5XkkkmHjspaIENlR7saeEyMrf3ru7gNXo6az9MaQuveT8SWmF4AINFym95VMke1FAYH5KfAUJ9FEDhrqbOQgP98ZcCN40nK6KKIEgz7Ttgc89kxf9TUUNPEsO01hoBOjGM'),
(7, 18, 'eBzeAP3jlYc:APA91bFedJ2wp_4lUtvlnUXZXBjbic1FvYFQ4w2FOR3aS9gAs-9LPNOLqw42QZO86pCoBPQ31g5Fc627fdom7DkGMbQytP32-pCISUWI5ql4BYPXaZpDbgc_mOC0YTOTt2GZeXTDUk5C'),
(8, 22, 'dziyEHGZdBg:APA91bFJ-j4juPE6TvgiNAe6JQB4oDz39Jc65UIq2fywUTJ2GEPEKReyaOKcjH7aWeX4Bg6SjdE65pf5e15xOcuOCZM9tEDFLucccjhbXaMVlDoC4OKM2KoiUNl-oRlytsy7gw1ZfkO4'),
(9, 24, 'fwfRd1TEfTI:APA91bFRjEwhQoTQB9Pdxf-o9RUa5V6WsfV-To2ukruCTwvgkKulHCvPBSmIxjnqHzi40FoOuCL5bjVBKZ2I3XpMp1KP2KFygS_43mqMCjPyyrJUN8Fmz1uT7SV29pznlqIGZCBr0JhU'),
(10, 29, 'fJ0Wh7Wt5yY:APA91bHX_l17Kbft9X-F-9Pj5M1mSG5kpXMj72hN6T8ZSiWKpX5-X-raMrqBXakzW1ev7HmPjTEwqpTIjphAPA7Oi2LhVu0wu5fu97zgM2t9a-MhC7LlGQgWqdurQOiaKHe-MvS_1Lz3'),
(11, 31, 'cG8qoIkAT3s:APA91bGydXCP3jBzxSYD-LWBTftcSCWhe3j5F5arA3Q6oMgKjBXAxznh4duax9yGde3vopFUijkrXwspiOhcgRoBLa-lCIiYfn0PuUVdBehWOkFm0SbQtB7GR4JE8oKNQ2dPRqoeFlnb'),
(12, 33, 'f3_DIOwgKMI:APA91bGhNnL4u2zGv-5G7Zm4mNBUX0yxFG0TDPxbqZOeYPQurFR6Q2AK4KxJGRwkASzjEUsjhU9icj5CBIReLgWxg1wFGcWG34QK9FzOmvy5hJxYfLSe7kkQn_DvPJtEu9YuFVPBxW9w'),
(13, 34, 'eAAJNfnr9po:APA91bH9ZZL1pAnpc703Cu7OWCJKNLsznAKhf5DGUtS3UM62U65cNFc96mQpiytMCdmQyBDlcnE4ON-9-UIPT9kT6XxgezM9U145kSqfXNjRkH24dYwGXFOJbHfimvJJTVfDc12i2-mG'),
(14, 36, 'eui4UfGyrQ4:APA91bEpl0zlXzUMdHaCE98hV2-yf1Ot9R97EgDC5wfcS5w1eM3YdQsc-VRKZSL_M4a3ibkRvjQuHJyPBeAKBImWMDlECrCfK4FOId-LJWYDHSB744do1hQA0ky5kSfdJs4-qoLRXLan'),
(15, 38, 'dsRp23nBVoU:APA91bGA_BTwcaQoNso7OE-6HCMFrYGm_ysOw6S6V1o4_HNC1NRxqqgerkQtUz-720fYiADMFksTikRTJOqRqH9USYdt3Mm_be6qFDmXFWnq0OtYYtQPeIQ3kwppN2X6oH5wc6BtypJW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_apply_scholarship`
--
ALTER TABLE `tbl_apply_scholarship`
  ADD PRIMARY KEY (`apply_id`);

--
-- Indexes for table `tbl_document`
--
ALTER TABLE `tbl_document`
  ADD PRIMARY KEY (`document_id`);

--
-- Indexes for table `tbl_education`
--
ALTER TABLE `tbl_education`
  ADD PRIMARY KEY (`education_id`);

--
-- Indexes for table `tbl_family_earning`
--
ALTER TABLE `tbl_family_earning`
  ADD PRIMARY KEY (`family_earning_id`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`doc_id`);

--
-- Indexes for table `tbl_home_slider`
--
ALTER TABLE `tbl_home_slider`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `tbl_intrest`
--
ALTER TABLE `tbl_intrest`
  ADD PRIMARY KEY (`intrest_id`);

--
-- Indexes for table `tbl_personal_info`
--
ALTER TABLE `tbl_personal_info`
  ADD PRIMARY KEY (`personal_info_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `tbl_reference`
--
ALTER TABLE `tbl_reference`
  ADD PRIMARY KEY (`reference_id`);

--
-- Indexes for table `tbl_scholarship`
--
ALTER TABLE `tbl_scholarship`
  ADD PRIMARY KEY (`s_id`);

--
-- Indexes for table `tbl_student`
--
ALTER TABLE `tbl_student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `tbl_token`
--
ALTER TABLE `tbl_token`
  ADD PRIMARY KEY (`token_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_apply_scholarship`
--
ALTER TABLE `tbl_apply_scholarship`
  MODIFY `apply_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `tbl_document`
--
ALTER TABLE `tbl_document`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_education`
--
ALTER TABLE `tbl_education`
  MODIFY `education_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_family_earning`
--
ALTER TABLE `tbl_family_earning`
  MODIFY `family_earning_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `doc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_home_slider`
--
ALTER TABLE `tbl_home_slider`
  MODIFY `slider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_intrest`
--
ALTER TABLE `tbl_intrest`
  MODIFY `intrest_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_personal_info`
--
ALTER TABLE `tbl_personal_info`
  MODIFY `personal_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_reference`
--
ALTER TABLE `tbl_reference`
  MODIFY `reference_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_scholarship`
--
ALTER TABLE `tbl_scholarship`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `tbl_student`
--
ALTER TABLE `tbl_student`
  MODIFY `student_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `tbl_token`
--
ALTER TABLE `tbl_token`
  MODIFY `token_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
