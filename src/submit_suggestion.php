<?php
// Retrieve form data
$name = $_POST['name'];
$suggestion = $_POST['suggestion'];

// Validate form data (you can add more validation if needed)

// Connect to the MySQL server
$servername = 'localhost'; 
$username = 'id20783410_didou';
$password = 'Didou159@';
$dbname = 'id20783410_protfoliosug';

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL statement to insert the suggestion into the database
$stmt = $conn->prepare("INSERT INTO `sug` (name, suggestion) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $suggestion);
$stmt->execute();

// Check if the suggestion was successfully inserted
if ($stmt->affected_rows > 0) {
    echo "Suggestion submitted successfully.";
} else {
    echo "Failed to submit suggestion.";
}

$stmt->close();
$conn->close();
?>


