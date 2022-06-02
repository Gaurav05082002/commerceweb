<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $desc = $_POST['desc'];
        
      // Submit these to a database
      //connecting to data base
    
$servername = "localhost";
$username = "root";
$password = "";
$database = "contacts";
$conn = mysqli_connect($servername, $username ,$password, $database);
if (!$conn){
    die("unable to connect :" . mysqli_connect_error() ); 
}
else {
    echo "connection suceesss full";
    //submitting the data
    $sql = "INSERT INTO `contactus` ( `name`, `email`, `concern`, `dt`) VALUES ( '$name', '$email', '$desc', current_timestamp())";
$result = mysqli_query($conn, $sql);
// fill one entry going to admin and then copy its code paste here
//remove ; when you copy insert query from my admin 
if($result){
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your entry has been submitted successfully!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>';
}
else{
    echo "The record was not inserted successfully because of this error ---> ". mysqli_error($conn);
}
}


    }
?>
