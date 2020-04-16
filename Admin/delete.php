<?php
include 'config.php';

$obj=new DB();

if(isset($_GET['sid'])){
    $ans=$obj->deleteS($_GET['sid']);
    if($ans>0){
        header("location:scholarship.php");
    }
}
else if(isset($_GET['fid'])){
    $ans=$obj->deleteF($_GET['fid']);
    if($ans>0){
        header("location:feedback.php");
    }
}
else if(isset($_GET['studentid'])){
    $ans=$obj->deleteStudent($_GET['studentid']);
    if($ans>0){
        header("location:registerusers.php");
    }
}

?>