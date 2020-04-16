<?php
define("db","trivedis_scholarship_db");
define("host","localhost");
define("user","trivedis_student");
define("pass","trivedis_student");
define("url","https://trivediservices.com/scholar/slider/");
define("imgurl","https://trivediservices.com/scholar/img/");
define("docurl","https://trivediservices.com/scholar/docs/");

class DB
{
    public function login($username,$password){
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_student where email='$username' and password='$password'";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['firstname']=$row['firstname'];
                        $data['lastname']=$row['lastname'];
                        $data['email']=$row['email'];
                        $data['phone']=$row['mobile'];
                        $data['student_id']=$row['student_id'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function insert_student($student){
           $con=mysqli_connect(host,user,pass,db);
           $qry="insert into tbl_student(firstname,lastname,email,mobile,password) values ('$student[firstname]','$student[lastname]','$student[email]','$student[mobile]','$student[password]')";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function insert_feedback($student){
           $con=mysqli_connect(host,user,pass,db);
           $date=date('Y-m-d');
           $qry="insert into tbl_feedback(f_date,details,student_id) values ('$date','$student[detail]','$student[studentid]')";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function update_password($student){
           $con=mysqli_connect(host,user,pass,db);
           $qry="update tbl_student set password='$student[password]' where student_id='$student[studentid]'";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function insert_scholarship($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="insert into tbl_scholarship(name,photo,income_details,last_date) values ('$s[name]','$s[photo]','$s[detail]','$s[ldate]','$s[website]')";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
     public function update_scholarship($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="update tbl_scholarship set name='$s[name]',photo='$s[photo]',income_details='$s[detail]',last_date='$s[ldate]',website='$s[website]' where s_id='$s[sid]'";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function update_scholarship_without_img($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="update tbl_scholarship set name='$s[name]',income_details='$s[detail]',last_date='$s[ldate]',website='$s[website]' where s_id='$s[sid]'";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function apply_scholarship($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="insert into tbl_apply_scholarship(sc_id,student_id,apply_date,status) values ('$s[scid]','$s[studentid]','$s[applydate]','$s[status]')";
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function insert_document($s){
           $con=mysqli_connect(host,user,pass,db);
           
           $qry1="select * from tbl_document where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
            $qry="update tbl_document set doc_type='$s[doctype]',doc_url='$s[docurl]' where student_id='$s[studentid]'";
           }else{
            $qry="insert into tbl_document(doc_type,doc_url,student_id) values ('$s[doctype]','$s[docurl]','$s[studentid]')";
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function update_tbl_personal_info($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry1="select * from tbl_personal_info where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
               $qry="update `tbl_personal_info` set `adharno`='$s[adharno]', `dob`='$s[dob]', `address`='$s[address]', `pincode`='$s[pincode]', `state`='$s[state]', `district`='$s[district]', `city`='$s[city]', `religion`='$s[religion]', `category`='$s[category]', `gender`='$s[gender]', `family_income`='$s[family_income]', `are_you_physically_challenged`='$s[are_you_physically_challenged]', `are_you_looking_abroad_student`='$s[are_you_looking_abroad_student]' where student_id='$s[studentid]'";
           }else
               $qry="INSERT INTO `tbl_personal_info`(`student_id`, `adharno`, `dob`, `address`, `pincode`, `state`, `district`, `city`, `religion`, `category`, `gender`, `family_income`, `are_you_physically_challenged`, `are_you_looking_abroad_student`) VALUES ('$s[studentid]','$s[adharno]','$s[dob]','$s[address]','$s[pincode]','$s[state]','$s[district]','$s[city]','$s[religion]','$s[category]','$s[gender]','$s[family_income]','$s[are_you_physically_challenged]','$s[are_you_looking_abroad_student]')";
           
           $ans=mysqli_query($con,$qry);
            return $ans;
    }
    public function home_slider(){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_home_slider";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['sliderid']=$row['slider_id'];
                        $data['image_url']=url.$row['image'];
                        
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function getDocumentByStudentID($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_document where student_id='$s'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['doctype']=$row['doc_type'];
                        $data['student_id']=$row['student_id'];
                        $data['docurl']=docurl.$row['doc_url'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function getStudentProfile($s){
           $con=mysqli_connect(host,user,pass,db);
           
           $qry1="select * from tbl_student where student_id='$s";
            $ans1=mysqli_query($con,$qry1);
            if($ans1!=null){
                if(mysqli_num_rows($ans1)>0){
                        while($row1=$ans1->fetch_array()){
                            $data1['firstname']=$row1['firstname'];
                            $data1['lastname']=$row1['lastname'];
                            $data1['email']=$row1['email'];
                            $data1['phone']=$row1['mobile'];
                            $data1['student_id']=$row1['student_id'];
                           
                        }   
                }
            }
           $qry="select * from tbl_personal_info where student_id='$s'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['adharno']=$row['adharno'];
                        $data['studentid']=$row['student_id'];
                        $data['dob']=$row['dob'];
                        $data['address']=$row['address'];
                        $data['pincode']=$row['pincode'];
                        $data['state']=$row['state'];
                        $data['district']=$row['district'];
                        $data['city']=$row['city'];
                        $data['religion']=$row['religion'];
                        $data['category']=$row['category'];
                        $data['gender']=$row['gender'];
                        $data['family_income']=$row['family_income'];
                        $data['are_you_physically_challenged']=$row['are_you_physically_challenged'];
                        $data['are_you_looking_abroad_student']=$row['are_you_looking_abroad_student'];
                        
                        if($data1!=null){
                            $data['firstname']=$data1['firstname'];
                            $data['lastname']=$data1['lastname'];
                            $data['email']=$data1['email'];
                            $data['phone']=$data1['phone'];
                            $data['student_id']=$data1['student_id'];
                        }
                        $response[]=$data;
                         //$response[]=$data1;
                    }   
            }
        }
        return $response;
    }
    public function getAllScholarShip(){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_scholarship";
           $ans=mysqli_query($con,$qry);
            if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['name']=$row['name'];
                        $data['sid']=$row['s_id'];
                        $data['image_url']=imgurl.$row['photo'];
                        $data['income_details']=$row['income_details'];
                        $data['last_date']=$row['last_date'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function getAllScholarShipByid($id){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_scholarship where s_id='$id'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['name']=$row['name'];
                        $data['sid']=$row['s_id'];
                        $data['image_url']=imgurl.$row['photo'];
                        $data['income_details']=$row['income_details'];
                        $data['last_date']=$row['last_date'];
                        $data['apply_url']=$row['website'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function insert_reference($s){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_reference where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
           $qry="update tbl_reference set fullname='$s[fullname]',mobile='$s[mobile]',occupation='$s[occupation]',relation='$s[relation]' where student_id='$s[studentid]'";    
           }else
           {
           $qry="insert into tbl_reference(student_id,fullname,mobile,occupation,relation) values ('$s[studentid]','$s[fullname]','$s[mobile]','$s[occupation]','$s[relation]')";    
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    
    public function getApplicationStatus($id){
           $con=mysqli_connect(host,user,pass,db);
           $qry="SELECT * FROM `tbl_apply_scholarship` join tbl_scholarship on tbl_apply_scholarship.sc_id=tbl_scholarship.s_id  where tbl_apply_scholarship.student_id='$id'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['name']=$row['name'];
                        $data['sid']=$row['s_id'];
                        $data['image_url']=imgurl.$row['photo'];
                        $data['income_details']=$row['income_details'];
                        $data['last_date']=$row['last_date'];
                        $data['apply_date']=$row['apply_date'];
                        $data['status']=$row['status'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function getIntrest($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_intrest where student_id='$s[studentid]'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['merit_based']=$row['merit_based'];
                        $data['means_based']=$row['means_based'];
                        $data['cultural_talent']=$row['cultural_talent'];
                        $data['visual_art']=$row['visual_art'];
                        $data['literacy_art']=$row['literacy_art'];
                        $data['sport_talent']=$row['sport_talent'];
                        $data['science_maths_based']=$row['science_maths_based'];
                        $data['technology_based']=$row['technology_based'];
                        $data['student_id']=$row['student_id'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function getReference($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_reference where student_id='$s[studentid]'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['reference_id']=$row['reference_id'];
                        $data['student_id']=$row['student_id'];
                        $data['fullname']=$row['fullname'];
                        $data['mobile']=$row['mobile'];
                        $data['occupation']=$row['occupation'];
                        $data['relation']=$row['relation'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    public function insert__intrest($s){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_intrest where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
           $qry="update tbl_intrest set merit_based='$s[merit_based]',means_based='$s[means_based]',cultural_talent='$s[cultural_talent]',visual_art='$s[visual_art]',literacy_art='$s[literacy_art]',sport_talent='$[sport_talent]',science_maths_based='$[science_maths_based]',technology_based='$[technology_based]' where student_id='$s[studentid]'";    
           }else
           {
           $qry="insert into tbl_intrest(student_id,merit_based,means_based,cultural_talent,visual_art,literacy_art,sport_talent,science_maths_based,technology_based) values ('$s[studentid]','$s[merit_based]','$s[means_based]','$s[cultural_talent]','$s[visual_art]','$s[literacy_art]','$s[sport_talent]','$s[science_maths_based]','$s[technology_based]')";    
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    
    
    public function insert_family_earning($s){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_family_earning where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
           $qry="update tbl_family_earning set member_name='$s[member_name]',qualification='$s[qualification]',relation_with_candidate='$s[relation_with_candidate]',occupation='$s[occupation]',income='$s[income]' where student_id='$s[studentid]'";    
           }else
           {
           $qry="insert into tbl_family_earning(member_name,qualification,occupation,relation_with_candidate,income,student_id) values ('$s[member_name]','$s[qualification]','$s[occupation]','$s[relation_with_candidate]','$s[income]','$s[studentid]')";    
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    
    public function getfamily_earning($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_family_earning where student_id='$s[studentid]'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['member_name']=$row['member_name'];
                        $data['student_id']=$row['student_id'];
                        $data['qualification']=$row['qualification'];
                        $data['occupation']=$row['occupation'];
                        $data['relation_with_candidate']=$row['relation_with_candidate'];
                        $data['income']=$row['income'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    public function insert_education($s){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_education where student_id='$s[studentid]'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
           $qry="update tbl_education set degree='$s[degree]',class_college='$s[class_college]',is_your_present_class='$s[is_your_present_class]',passing_year='$s[passing_year]',marks='$s[marks]' where student_id='$s[studentid]'";    
           }else
           {
           $qry="insert into tbl_education(degree,class_college,is_your_present_class,passing_year,marks,student_id) values ('$s[degree]','$s[class_college]','$s[is_your_present_class]','$s[passing_year]','$s[marks]','$s[studentid]')";    
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    
    public function getEducation($s){
           $con=mysqli_connect(host,user,pass,db);
           $qry="select * from tbl_education where student_id='$s[studentid]'";
           $ans=mysqli_query($con,$qry);
          if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['degree']=$row['degree'];
                        $data['student_id']=$row['student_id'];
                        $data['class_college']=$row['class_college'];
                        $data['is_your_present_class']=$row['is_your_present_class'];
                        $data['passing_year']=$row['passing_year'];
                        $data['marks']=$row['marks'];
                        $data['marks']=$row['marks'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    public function updatetoken($s,$token){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_token where studentid='$s'";
           $d=mysqli_query($con,$qry1);
           if($d!=null && mysqli_num_rows($d)>0){
           $qry="update tbl_token set token='$token' where studentid='$s'";    
           }else
           {
           $qry="insert into tbl_token(studentid,token) values ('$s','$token')";    
           }
           $ans=mysqli_query($con,$qry);
        return $ans;
    }
    public function getToken(){
           $con=mysqli_connect(host,user,pass,db);
            $qry1="select * from tbl_token";
           if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['token']=$row['token'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    
    //Website Methods
     public function getAllStudent(){
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_student";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['firstname']=$row['firstname'];
                        $data['lastname']=$row['lastname'];
                        $data['email']=$row['email'];
                        $data['phone']=$row['mobile'];
                        $data['student_id']=$row['student_id'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    public function getAllStudentToken()
    {
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_token";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['token']=$row['token'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
     public function getAllStudentApply()
    {
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_apply_scholarship join tbl_student on tbl_apply_scholarship.student_id=tbl_student.student_id join tbl_scholarship t on tbl_apply_scholarship.sc_id=t.s_id";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['firstname']=$row['firstname'];
                        $data['apply_date']=$row['apply_date'];
                        $data['lastname']=$row['lastname'];
                        $data['email']=$row['email'];
                        $data['phone']=$row['mobile'];
                        $data['student_id']=$row['student_id'];
                        $data['name']=$row['name'];
                        $data['sid']=$row['s_id'];
                        $data['image_url']=imgurl.$row['photo'];
                        $data['income_details']=$row['income_details'];
                        $data['last_date']=$row['last_date'];
                        $data['status']=$row['status'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    
    
    public function getFeedback()
    {
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_feedback join tbl_student on tbl_feedback.student_id=tbl_student.student_id";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['firstname']=$row['firstname'];
                        $data['lastname']=$row['lastname'];
                        $data['email']=$row['email'];
                        $data['phone']=$row['mobile'];
                        $data['student_id']=$row['student_id'];
                        $data['f_date']=$row['f_date'];
                        $data['details']=$row['details'];
                        $data['doc_id']=$row['doc_id'];
                        
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
      
      
    public function adminlogin($username,$password){
        $response=array();
        $data=array();
        $con=mysqli_connect(host,user,pass,db);
        $qry="select * from tbl_admin where email='$username' and password='$password'";
        $ans=mysqli_query($con,$qry);
        if($ans!=null){
            if(mysqli_num_rows($ans)>0){
                    while($row=$ans->fetch_array()){
                        $data['email']=$row['email'];
                        $response[]=$data;
                    }   
            }
        }
        return $response;
    }
    public function deleteS($id){
           $con=mysqli_connect(host,user,pass,db);
           $qry="delete from tbl_scholarship where s_id='$id'";
           $ans=mysqli_query($con,$qry);
            
        return $ans;
    }
    
    public function deleteF($id){
           $con=mysqli_connect(host,user,pass,db);
           $qry="delete from tbl_feedback where doc_id='$id'";
           $ans=mysqli_query($con,$qry);
            
        return $ans;
    }
    public function deleteStudent($id){
           $con=mysqli_connect(host,user,pass,db);
           $qry="delete from tbl_student where student_id='$id'";
           $ans=mysqli_query($con,$qry);
            
        return $ans;
    }
    
   
   
}
?>