<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cbhlc_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$role = $_POST['role'] ?? '';

if ($name && $email && $password && $role) {
  $hashed = password_hash($password, PASSWORD_DEFAULT);
  $sql = "INSERT INTO register (name, email, password, role) VALUES (?, ?, ?, ?)";
  $stmt = $conn->prepare($sql);
  if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
  }
  $stmt->bind_param("ssss", $name, $email, $hashed, $role);
  if ($stmt->execute()) {
    echo "success";
  } else {
    echo "SQL error: " . $stmt->error;
  }
  $stmt->close();
} else {
  echo "Missing fields";
}
$conn->close();
?>