<?php
include '../config.php';

if(isset($_POST['email']) && isset($_POST['password'])){
    $user=$_POST['email'];
    $password=$_POST['password'];
    $obj=new DB();
    $data=$obj->adminlogin($user,$password);
    if($data!=null){
        if(count($data)>0){
            header('location:../index.php');
        }
    }else{
            header('location:index.html');
    }
}

?>