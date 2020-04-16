<?php
include_once 'config.php';

if(isset($_POST['btn'])){
    
    $name=$_POST['name'];
    $detail=$_POST['description'];
    $date=$_POST['date'];
    $photo=$_FILES['img']['name'];
    $web=$_POST['website'];
    
    if(isset($_POST['sid'])){
        $sid=$_POST['sid'];
        if($photo==null){
            
            $data=array("name"=>$name,"photo"=>$photo,"detail"=>$detail,"ldate"=>$date,"website"=>$web,"sid"=>$sid);
            $obj=new DB();
            $ans=$obj->update_scholarship_without_img($data);
            if($ans>0){
                setAlert();
            }
            
        }else{
            move_uploaded_file($_FILES['img']['tmp_name'],"img/".$photo);
            $data=array("name"=>$name,"photo"=>$photo,"detail"=>$detail,"ldate"=>$date,"website"=>$web,"sid"=>$sid);
            $obj=new DB();
            $ans=$obj->update_scholarship($data);
            if($ans>0){
                setAlert();
            }   
        }
    }else{
        move_uploaded_file($_FILES['img']['tmp_name'],"img/".$photo);
        $data=array("name"=>$name,"photo"=>$photo,"detail"=>$detail,"ldate"=>$date,"website"=>$web);
        $obj=new DB();
        $ans=$obj->insert_scholarship($data);
        if($ans>0){
            setAlert();
        }    
    }
    
    
}

 function setAlert(){
$obj=new DB();
$response=array();
$data=array();
define('API_ACCESS_KEY','AAAAtcYiDyc:APA91bGEki6rXq-cW3Y17vARM-outcE45TPx4d3LB1968e_A2C3G8YgplINDDBqs5LHf9n4HumilwKB347wHFFhkjwBSSfcNQvPBRq9pjMSBfEBYudkQAsMtRk3w8YxKmhzC041Rx6eA');
 $fcmUrl = 'https://fcm.googleapis.com/fcm/send';
 
$token=$obj->getAllStudentToken();
for($i=0;$i<count($token);$i++){
    $data[$i]=$token[$i]['token'];
}
//print_r($token);
//echo $token[0]['token'];
$msg='New Scholerships are updated.';


    $notification = [
            'title' =>'Scholarship details',
            'body' => $msg,
            'icon' =>'myIcon', 
            'sound' => 'mySound'
        ];
        $extraNotificationData = ["message" => $notification,"moredata" =>'dd'];

        $fcmNotification = [
            'registration_ids' => $data, //multple token array
            //'to'        => 'fkzZMz9wsQk:APA91bGBem-lV-snXnlrChC9Armlk0dLMMuY4bnCNieyhJw7MXIm7Fija5j1A2viC6umAjjkfzUZmIKvk6AMf6GbuXfMHjpBRNlFrLrpCIzENne8Bf7e5aoOZZGOQIFsNbZMPt0iYM8l', //single token
            'notification' => $notification, // is used when you want to send notification in mobile for pop up show in mobile
            'data' => $extraNotificationData // send notification without popup
        ];

        $headers = [
            'Authorization: key=' . API_ACCESS_KEY,
            'Content-Type: application/json'
        ];


        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$fcmUrl);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
        $result = curl_exec($ch);
        curl_close($ch);

header("location:scholarship.php");
//         echo json_encode($result);
}

?>