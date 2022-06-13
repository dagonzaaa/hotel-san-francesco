<?php

include 'BD.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="select * from persona where id=".$_GET['id'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from persona";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    exit();
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['name'];
    $lastname=$_POST['lastname'];
    $username=$_POST['username'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];

    $query="INSERT INTO persona values (NULL, '$name', '$lastname', '$username','$email', ' ', '0', 'public', '$pass')";
    $resultado = metodoPost($query);
    echo json_encode($resultado);
    
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $query="DELETE FROM persona WHERE id='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    
    exit();
}




?>