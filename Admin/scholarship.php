<?php include 'header.php'; ?>

<div class="container">

<div id="page-wrapper">
        
         <div class="row">
        <div class="col-lg-6">
            <h3 class="page-header">Add New Scholarship Details</h3>
        </div>
        <div class="col-lg-6">
        
        </div>
    </div>
        <a href='add_scholarship.php' class='btn btn-primary'>Add New</a>
<hr>
<table class="table table-striped table-bordered table-condensed">
    <thead>
    <tr style='background-color:#0082e6;color:white'>
        <th>No</th>
        <th>Scholarship Name</th>
        <th>Last Date</th>
        <th>Details</th>
        <th>Edit</th>
        <th>Delete</th>
    </tr>
    </thead>
    <tbody>
     <?php
    $obj=new DB();
    $data=$obj->getAllScholarShip();
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>
            
             <tr>
        <td><?php echo $data[$i]['sid']; ?></td>
        <td><?php echo $data[$i]['name']; ?></td>
        <td><?php echo $data[$i]['last_date']; ?></td>
        <td><a href='add_scholarship.php?sid=<?php echo $data[$i]['sid']; ?>&detail=true'>Details</a></th>
        <td><a href='add_scholarship.php?sid=<?php echo $data[$i]['sid']; ?>'>Edit</a></td>
        <td><a href='delete.php?sid=<?php echo $data[$i]['sid']; ?>'>Delete</a></td>
        
    </tr>
            
        <?php }
    }
    ?>
    </tbody>
</table>

 </div>
 </div>
<?php include 'footer.php'; ?>