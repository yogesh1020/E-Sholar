<!DOCTYPE html>
<?php include 'config.php'; ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ScholarShip</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>

<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />
            <script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>


<script>
    $(document).ready(function(){
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'yyyy-mm-dd',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    })
</script>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">E-Scholar</label>
      <ul>
          <?php  
          $pagename=basename($_SERVER['PHP_SELF']);
          ?>
        <li><a class="<?php echo $pagename=="index.php"?"active":""; ?>" href="index.php">Home</a></li>
        <li><a class="<?php echo $pagename=="scholarship.php"?"active":"";?>" href="scholarship.php">Scholarship</a></li>
        <li><a class="<?php echo $pagename=="registerusers.php"?"active":""; ?>" href="registerusers.php">Users</a></li>
        <li><a class="<?php echo $pagename=="applys.php"?"active":""; ?>" href="applys.php">Apply Scholarships</a></li>
        <li><a class="<?php echo $pagename=="feedback.php"?"active":""; ?> ?>" href="feedback.php">Feedback</a></li>
        <li><a href="login/index.html">Logout</a></li>
      </ul>
    </nav>