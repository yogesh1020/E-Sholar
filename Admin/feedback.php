<?php include 'header.php'; ?>
<div class="container">

<h3>Feedback Details</h3>
<hr>
<table class="table table-striped table-bordered table-condensed">
    <thead>
    <tr style='background-color:#0082e6;color:white'>
        <th>No</th>
        <th>Student Name</th>
        <th>Feedback Date</th>
        <th>Detail</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
        
    
     <?php
    $obj=new DB();
    $data=$obj->getFeedback();
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>
            
             <tr>
        <th><?php echo $data[$i]['doc_id']; ?></th>
        <th><?php echo $data[$i]['firstname']." ".$data[$i]['lastname']; ?></th>
        <th><?php echo $data[$i]['f_date']; ?></th>
        <th><?php echo $data[$i]['details']; ?></th>
        <th><a href='delete.php?fid=<?php echo $data[$i]['doc_id']; ?>'>Delete</a></th>
        
    </tr>
            
        <?php }
    }
    ?>
    </tbody>
</table>

 </div>
<?php include 'footer.php'; ?>