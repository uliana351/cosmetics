<?php

/* Принимаем данные из формы */
  $name = $_POST["sirname"]; 
  $email = $_POST["email"];
  $phone = $_POST["phone"];

/* Подключаемся к базе данных */
$link = mysqli_connect("localhost", "root", "");
mysqli_select_db($link, "praktika");

/* Записываем данные в БД */ 
$sql = "INSERT INTO feedback(name, email, phone) VALUES ('$name', '$email', '$phone')";
$result=mysqli_query($link, $sql);

/* Делаем редирект обратно */
header("Location: ".$_SERVER["HTTP_REFERER"]); 
exit;

?>
