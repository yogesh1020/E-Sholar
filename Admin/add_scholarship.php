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
    
    if(isset($_GET['detail'])){
        $isDetail=true;
    }else{
        $isDetail=false;
    }
    
    $obj=new DB();
    $data=$obj->getAllScholarShipByid($sid);
    
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>

<h3>Edit Scholarship Details</h3>
<form method="post" action="save.php" enctype="multipart/form-data">
	<div class="form-group">
	    <input type='hidden' name="sid" value="<?php echo $data[$i]['sid']; ?>" />
	<label>Name</label>
	    	<input type="text" name="name" id="name" class="form-control" value="<?php echo $data[$i]['name']; ?>" <?php echo $isDetail==true?"readonly":""; ?> />
    </div>
    <div class="form-group">
	<label>Photo</label>
	    	<input type="file" name="img" id="img" class="form-control" <?php echo $isDetail==true?"readonly":""; ?> />
	    	<img src="<?php echo $data[$i]['image_url']; ?>" height='150px' width='150px' />
    </div>
   <div class="form-group">
	<label>Details</label>
	  <textarea name="description" id="description" class="form-control" rows="16"><?php echo $data[$i]['income_details']; ?></textarea>
		<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
		<script type="text/javascript">                        
            CKEDITOR.replace( 'description' );
        </script>
    </div>
    <div class="form-group">
	<label>Last Date</label>
	    	 <input class="form-control" id="date" name="date" placeholder="yyyy-MM-dd" type="text" value="<?php echo $data[$i]['last_date']; ?>" <?php echo $isDetail==true?"readonly":""; ?> />
      
    </div>
    <div class="form-group">
	<label>Website Link</label>
	    	<input type="text" name="website" id="website" class="form-control" value="<?php echo $data[$i]['apply_url']; ?>" <?php echo $isDetail==true?"readonly":""; ?> />
    </div>
    
   <div class="form-group">

            <?php if($isDetail==false){ ?>
	    	<input type="submit" name="btn" value="Update" class="form-control" />
	    	<?php } ?>
    </div>

</form>
<?php }}}else{ ?>

<h3>Add New Scholarship Details</h3>
<form method="post" action="save.php" enctype="multipart/form-data">
	<div class="form-group">
	<label>Name</label>
	    	<input type="text" name="name" id="name" class="form-control" />
    </div>
    <div class="form-group">
	<label>Photo</label>
	    	<input type="file" name="img" id="img" class="form-control" />
	    	
    </div>
   <div class="form-group">
	<label>Details</label>
	  <textarea name="description" id="description" class="form-control" rows="16"></textarea>
		<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
		<script type="text/javascript">                        
            CKEDITOR.replace( 'description' );
        </script>
    </div>
    <div class="form-group">
	<label>Last Date</label>
	    	 <input class="form-control" id="date" name="date" placeholder="yyyy-MM-dd" type="text"/>
      
    </div>
    <div class="form-group">
	<label>Website Link</label>
	    	<input type="text" name="website" id="website" class="form-control" />
    </div>
    
   <div class="form-group">

	    	<input type="submit" name="btn" value="Save" class="form-control" />
    </div>

</form>

<?php } ?>
 </div>
<?php include 'footer.php'; ?>