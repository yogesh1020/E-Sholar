<?php include 'header.php'; ?>
<div class="container">

<div id="page-wrapper">
        
         <div class="row">
        <div class="col-lg-6">
            <h3 class="page-header">Register Students Details</h3>
        </div>
    </div>

<hr>
<table class="table table-striped table-bordered table-condensed">
    <thead>
    <tr style='background-color:#0082e6;color:white'>
        <th>No</th>
        <th>First Name </th>
        <th>Last Name </th>
        <th>Email </th>
        <th>Phone </th>
        <th>Details</th>
        <th>Delete</th>
    </tr>
        
    </thead>
    <tbody>
        
    <?php
    $obj=new DB();
    $data=$obj->getAllStudent();
    if($data!=null){
        for($i=0;$i<count($data);$i++){ ?>
             <tr>
        <td><?php echo $data[$i]['student_id']; ?></td>
        <td><?php echo $data[$i]['firstname']; ?></td>
        <td><?php echo $data[$i]['lastname']; ?></td>
        <td><?php echo $data[$i]['email']; ?> </td>
        <td><?php echo $data[$i]['phone']; ?> </td>
        <td><a href='student_detail.php?sid=<?php echo $data[$i]['student_id']; ?>&firstname=<?php echo $data[$i]['firstname']; ?>&lastname=<?php echo $data[$i]['lastname']; ?>'>Details</a></th>
        <td><a href='delete.php?studentid=<?php echo $data[$i]['student_id']; ?>'>Delete</a></td>
        
    </tr>
            
        <?php }
    }
    ?>
    </tbody>
    
</table>
 </div>
 </div>
<?php include 'footer.php'; ?>