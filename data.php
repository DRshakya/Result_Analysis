<?Php
$host_name = "localhost";
$database = "result"; 
$username = "root";         
$password = "";         

$connection = mysqli_connect($host_name, $username, $password, $database);

if (!$connection) {
    echo "Error: Unable to connect to MySQL.<br>";
    echo "<br>Debugging errno: " . mysqli_connect_errno();
    echo "<br>Debugging error: " . mysqli_connect_error();
    exit;
}

$query = sprintf("SELECT class, mid, pre, board  FROM sem1 WHERE s_roll=140001 AND sub_id = 101");

$result = $connection->query($query);

$data = array();
foreach ($result as $row)
{
  $data[] = $row;
}

$result->close();
$connection->close();

print json_encode($data);



?>