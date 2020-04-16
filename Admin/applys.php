<?php include 'header.php'; ?>
<div class="container">

<h3>Applied Scholarship Details</h3>
<hr>
<table class="table table-striped table-bordered table-condensed">
    <thead>
    <tr style='background-color:#0082e6;color:white'>
        <th>No</th>
        <th>Scholarship Name</th>
        <th>Student Name</th>
        <th>Apply Date</th>
        <th>Last Date</th>
        <th>Status</th>
        <th>Detail</th>
        
    </tr>
    </thead>
    <tbody>
     <?php
    $obj=new DB();
    $data=$obj->getAllStudentApply();
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>
            
             <tr>
        <th><?php echo $data[$i]['sid']; ?></th>
        <th><?php echo $data[$i]['name']; ?></th>
        <th><?php echo $data[$i]['firstname']." ".$data[$i]['lastname']; ?></th>
        <th><?php echo $data[$i]['apply_date']; ?></th>
        <th><?php echo $data[$i]['last_date']; ?></th>
        <th><?php echo $data[$i]['status']; ?></th>
        <th><a href='#'>Details</a></th>
        
    </tr>
            
        <?php }
    }
    ?>
    </tbody>
</table>

 </div>
<?php include 'footer.php'; ?>