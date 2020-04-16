<?php
include_once 'config.php';
header('content-type:application.json');

$obj=new DB();
$response=array();
$data=array();

$json=file_get_contents('php://input');
$d = json_decode($json); 
if($d->action=='login')
{
	if(!isset($d->email)){

		$response['code']=201;
		$response['message']="please enter email";

	}else if(!isset($d->password)){

		$response['code']=201;
		$response['message']="please enter password";

	}else if(!isset($d->token)){

		$response['code']=201;
		$response['message']="please enter token";

	}else{
		$data=$obj->login($d->email,$d->password);
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='login successfully';
					$response['user']=$data[0];
					
					$obj->updatetoken($data[0]['student_id'],$d->token);
					
			}else{
		        $response['code']=201;
		        $response['message']='email or password might be wrong.';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='email or password might be wrong.';
		}
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='register')
{
	if(!isset($d->email)){

		$response['code']=201;
		$response['message']="please enter email";

	}else if(!isset($d->password)){

		$response['code']=201;
		$response['message']="please enter password";

	}else if(!isset($d->mobile)){

		$response['code']=201;
		$response['message']="please enter mobile number";

	}else if(!isset($d->firstname)){

		$response['code']=201;
		$response['message']="please enter firstname";

	}else if(!isset($d->lastname)){

		$response['code']=201;
		$response['message']="please enter lastname";

	}else{
	    $user=array("firstname"=>$d->firstname,"lastname"=>$d->lastname,"mobile"=>$d->mobile,"email"=>$d->email,"password"=>$d->password);
		$data=$obj->insert_student($user);
		if($data>0){
					$response['code']=200;
					$response['message']='register successfully';
		}else{
		    $response['code']=201;
		    $response['message']='user not register properly';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getsliderimage')
{
		$data=$obj->home_slider();
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='slider image load successfully';
					$response['slider']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='slider image not load';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='slider image not load';
		}
		
		$data=$obj->getAllScholarShip();
		
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='load successfully';
					$response['scholarship']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='image not load';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='image not load';
		}
		
		
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getScholarship')
{
		$data=$obj->getAllScholarShip();
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='load successfully';
					$response['scholarship']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='image not load';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='image not load';
		}
		
		
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getScholarshipbyid')
{
		$data=$obj->getAllScholarShipByid($d->scholarshipid);
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='load successfully';
					$response['scholarship']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='image not load';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='image not load';
		}
		
		
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getDocDetails')
{
		$data=$obj->getDocumentByStudentID($d->studentid);
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='load successfully';
					$response['docs']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='image not load';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='image not load';
		}
		
		
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getProfileInfo')
{
    
		$data=$obj->getStudentProfile($d->studentid);
		if($data!=null){
			if(count($data)>0){
					$response['studentpersonalinfo']=$data;
			}else{
		        $response['code']=201;
		        $response['message']='not load';
		    }
		}
		$data1=$obj->getDocumentByStudentID($d->studentid);
		if($data1!=null){
			if(count($data1)>0){
					$response['docs']=$data1;
					
			}else{
		        $response['code']=201;
		        $response['message']='not load';
		    }
		}
		
		$user=array("studentid"=>$d->studentid);
		$data2=$obj->getIntrest($user);
		if($data2!=null && count($data2)>0){
					$response['intrests']=$data2;
		}
		
		
		$data3=$obj->getReference($user);
		if($data3!=null && count($data3)>0){
					$response['reference']=$data3;
		}
		$data4=$obj->getfamily_earning($user);
		if($data4!=null && count($data4)>0){
					$response['familtyincome']=$data4;
		}
		$data5=$obj->getEducation($user);
		if($data5!=null && count($data5)>0){
					$response['education']=$data5;
		}
		
		if(count($response)>0){
		    $response['code']=200;
					$response['message']='apply successfully';
		}else{
		    $response['code']=201;
		        $response['message']='not load';
		}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getScholarshipStatus')
{
		$data=$obj->getApplicationStatus($d->studentid);
		if($data!=null){
			if(count($data)>0){
					$response['code']=200;
					$response['message']='successfully';
					$response['scholarshipstatus']=$data;
					
			}else{
		        $response['code']=201;
		        $response['message']='application status not found';
		    }
		}else{
		    $response['code']=201;
		    $response['message']='application status not found';
		}
		
		
	echo json_encode(array('response'=>$response));
}
else if($d->action=='changepassword')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please student id";

	}else if(!isset($d->password)){

		$response['code']=201;
		$response['message']="please enter password";

	}else{
	    $user=array("studentid"=>$d->studentid,"password"=>$d->password);
		$data=$obj->update_password($user);
		if($data>0){
					$response['code']=200;
					$response['message']='change password successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error for password change';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='feedback')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please student id";

	}else if(!isset($d->detail)){

		$response['code']=201;
		$response['message']="please enter password";

	}else{
	    $user=array("studentid"=>$d->studentid,"detail"=>$d->detail);
		$data=$obj->insert_feedback($user);
		if($data>0){
					$response['code']=200;
					$response['message']='submit feedback successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error to add feedback change';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='applyscholarship')
{
	if(!isset($d->scholarship_id)){

		$response['code']=201;
		$response['message']="please enter scholarship_id";

	}else if(!isset($d->student_id)){

		$response['code']=201;
		$response['message']="please enter student_id";

	}else{
	    $user=array("scid"=>$d->scholarship_id,"studentid"=>$d->student_id,"applydate"=>date('Y-m-d'),"status"=>"pending");
		$data=$obj->apply_scholarship($user);
		if($data>0){
					$response['code']=200;
					$response['message']='apply successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='update_document')
{
	if(!isset($d->doctype)){

		$response['code']=201;
		$response['message']="please enter doctype";

	}else if(!isset($d->docurl)){

		$response['code']=201;
		$response['message']="please enter docurl";

	}else if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else{
	    $image=base64_decode($d->docurl);
	    define('UPLOAD_DIR', 'docs/');
	    $file = UPLOAD_DIR . uniqid() . '.png';
	    $success = file_put_contents($file, $image);
	    //print $success ? $file : 'Unable to save the file.';
	    $user=array("doctype"=>$d->doctype,"docurl"=>$file,"studentid"=>$d->studentid);
		$data=$obj->insert_document($user);
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='personal_info')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else if(!isset($d->adharno)){

		$response['code']=201;
		$response['message']="please enter adharno";

	}else if(!isset($d->dob)){

		$response['code']=201;
		$response['message']="please enter dob";

	}else if(!isset($d->address)){

		$response['code']=201;
		$response['message']="please enter address";

	}else if(!isset($d->pincode)){

		$response['code']=201;
		$response['message']="please enter pincode";

	}else if(!isset($d->state)){

		$response['code']=201;
		$response['message']="please enter state";

	}else if(!isset($d->district)){

		$response['code']=201;
		$response['message']="please enter district";

	}else if(!isset($d->city)){

		$response['code']=201;
		$response['message']="please enter city";

	}else if(!isset($d->religion)){

		$response['code']=201;
		$response['message']="please enter religion";

	}else if(!isset($d->category)){

		$response['code']=201;
		$response['message']="please enter category";

	}else if(!isset($d->gender)){

		$response['code']=201;
		$response['message']="please enter gender";

	}else if(!isset($d->family_income)){

		$response['code']=201;
		$response['message']="please enter family_income";

	}else if(!isset($d->are_you_physically_challenged)){

		$response['code']=201;
		$response['message']="please enter are_you_physically_challenged";

	}else if(!isset($d->are_you_looking_abroad_student)){

		$response['code']=201;
		$response['message']="please enter are_you_looking_abroad_student";

	}else{
	   
	    $user=array("studentid"=>$d->studentid,
	    "adharno"=>$d->adharno,
	    "dob"=>$d->dob,
	    "address"=>$d->address,
	    "pincode"=>$d->pincode,
	    "state"=>$d->state,
	    "district"=>$d->district,
	    "city"=>$d->city,
	    "religion"=>$d->religion,
	    "category"=>$d->category,
	    "gender"=>$d->gender,
	    "family_income"=>$d->family_income,
	    "are_you_physically_challenged"=>$d->are_you_physically_challenged,
	    "are_you_looking_abroad_student"=>$d->are_you_looking_abroad_student);
		$data=$obj->update_tbl_personal_info($user);
		
	//	echo $qry;
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='user not register properly';
		}
				
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='updatereference')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else if(!isset($d->fullname)){

		$response['code']=201;
		$response['message']="please enter fullname";

	}else if(!isset($d->mobile)){

		$response['code']=201;
		$response['message']="please enter mobile";

	}else if(!isset($d->occupation)){

		$response['code']=201;
		$response['message']="please enter occupation";

	}else if(!isset($d->relation)){

		$response['code']=201;
		$response['message']="please enter relation";

	}else{
	    $user=array("studentid"=>$d->studentid,"fullname"=>$d->fullname,"mobile"=>$d->mobile,"occupation"=>$d->occupation,"relation"=>$d->relation);
		$data=$obj->insert_reference($user);
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='updateintrest')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else if(!isset($d->merit_based)){

		$response['code']=201;
		$response['message']="please enter merit_based";

	}else if(!isset($d->means_based)){

		$response['code']=201;
		$response['message']="please enter means_based";

	}else if(!isset($d->cultural_talent)){

		$response['code']=201;
		$response['message']="please enter cultural_talent";

	}else if(!isset($d->visual_art)){

		$response['code']=201;
		$response['message']="please enter visual_art";

	}else if(!isset($d->literacy_art)){

		$response['code']=201;
		$response['message']="please enter literacy_art";

	}else if(!isset($d->sport_talent)){

		$response['code']=201;
		$response['message']="please enter sport_talent";

	}else if(!isset($d->science_maths_based)){

		$response['code']=201;
		$response['message']="please enter science_maths_based";

	}else if(!isset($d->technology_based)){

		$response['code']=201;
		$response['message']="please enter technology_based";

	}else{
	    $user=array("studentid"=>$d->studentid,"visual_art"=>$d->visual_art,"merit_based"=>$d->merit_based,"means_based"=>$d->means_based,"cultural_talent"=>$d->cultural_talent,"literacy_art"=>$d->literacy_art,"sport_talent"=>$d->sport_talent,"science_maths_based"=>$d->science_maths_based,"technology_based"=>$d->technology_based);
		$data=$obj->insert__intrest($user);
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='getIntrest')
{
    if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter student_id";

	}else{
	    $user=array("studentid"=>$d->studentid);
		$data=$obj->getIntrest($user);
		if(mysqli_num_rows($data)>0){
					$response['code']=200;
					$response['message']='apply successfully';
					$response['intrests']=$data;
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}
else if($d->action=='updatefamilyinfo')
{
    
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else if(!isset($d->member_name)){

		$response['code']=201;
		$response['message']="please enter member_name";

	}else if(!isset($d->qualification)){

		$response['code']=201;
		$response['message']="please enter qualification";

	}else if(!isset($d->occupation)){

		$response['code']=201;
		$response['message']="please enter occupation";

	}else if(!isset($d->relation_with_candidate)){

		$response['code']=201;
		$response['message']="please enter relation_with_candidate";

	}else if(!isset($d->income)){

		$response['code']=201;
		$response['message']="please enter income";

	}else{
	    $user=array("studentid"=>$d->studentid,"income"=>$d->income,"relation_with_candidate"=>$d->relation_with_candidate,"occupation"=>$d->occupation,"member_name"=>$d->member_name,"qualification"=>$d->qualification);
		$data=$obj->insert_family_earning($user);
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}

else if($d->action=='updateeducation')
{
	if(!isset($d->studentid)){

		$response['code']=201;
		$response['message']="please enter studentid";

	}else if(!isset($d->degree)){

		$response['code']=201;
		$response['message']="please enter degree";

	}else if(!isset($d->class_college)){

		$response['code']=201;
		$response['message']="please enter class_college";

	}else if(!isset($d->is_your_present_class)){

		$response['code']=201;
		$response['message']="please enter is_your_present_class";

	}else if(!isset($d->passing_year)){

		$response['code']=201;
		$response['message']="please enter passing_year";

	}else if(!isset($d->marks)){

		$response['code']=201;
		$response['message']="please enter marks";

	}else{
	    $user=array("studentid"=>$d->studentid,"degree"=>$d->degree,"class_college"=>$d->class_college,"is_your_present_class"=>$d->is_your_present_class,"passing_year"=>$d->passing_year,"marks"=>$d->marks);
		$data=$obj->insert_education($user);
		if($data>0){
					$response['code']=200;
					$response['message']='update successfully';
		}else{
		    $response['code']=201;
		    $response['message']='error';
		}
		
		
	}
	echo json_encode(array('response'=>$response));
}


?>