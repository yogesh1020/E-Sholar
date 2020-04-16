<?php 
include 'header.php';
define("imgurl","https://trivediservices.com/scholar/img/");
?>
<div class="container">


<?php
$sid=0;
$isDetail=false;
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    
    
    
    $obj=new DB();
    $data=$obj->getStudentProfile($sid);
 //   print_r($data);
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>


<hr>
<h4>Student Personal Details</h4>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>FULL NAME :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $_GET['firstname']." ".$_GET['lastname']; ?> 
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>GENDER :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $data[$i]['gender']; ?> 
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>AADHAR NUMBER :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $data[$i]['adharno']; ?> 
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>DOB :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $data[$i]['dob']; ?> 
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>ADDRESS :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $data[$i]['address']." ".$data[$i]['district']." ".$data[$i]['city']." ".$data[$i]['state']." ".$data[$i]['pincode']; ?> 
    </div>
</div>
<hr>
<div class="row">
    <div class="col-sm-4">
        <h6>FAMILY INCOME :</h6>
    </div>
    <div class="col-sm-8">
        <?php echo $data[$i]['family_income']; ?> 
    </div>
</div>



<?php }}} ?>
 </div>
<?php include 'footer.php'; ?>