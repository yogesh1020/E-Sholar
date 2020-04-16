<?php
include 'header.php';
?>
<style>
  .main-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(365px, 1fr)); /* Where the magic happens */
    grid-auto-rows: 94px;
    grid-gap: 20px;
    margin: 20px;
  }
  
  .overviewcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height:120px;
    background-color: #ffffff;
    border-style: ridge;
  }
</style>
<div class="main-overview">
  <div class="overviewcard">
       <?php
    $obj=new DB();
    ?>
      
    <div class="overviewcard__icon"><i class="fa fa-users fa-5x"></i></div>
    <div class="overviewcard__info"><h3><?php $data=$obj->getAllStudent();echo count($data); ?> <h3>Students</h3></h3></div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon"><i class="fa fa-graduation-cap fa-5x"></i></div>
    <div class="overviewcard__info"><h3><?php $data=$obj->getAllScholarShip();echo count($data); ?> <h3>Scholarship</h3></h3></div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon"><i class="fa fa-paper-plane fa-5x"></i></div>
    <div class="overviewcard__info"><h3><?php $data=$obj->getAllStudentApply();echo count($data); ?> <h3>Request</h3></h3></div>
  </div>
</div>
<?php
include 'footer.php';
?>
   