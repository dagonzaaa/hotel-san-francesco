<?php

include 'BD.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="select * from reserva where id=".$_GET['id'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from reserva";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    exit();
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $id_user=$_POST['id_user'];
    $id_habitacion=$_POST['id_habitacion'];
    $inicio=$_POST['inicio'];
    $fin=$_POST['fin'];
    $precio=$_POST['precio'];
    $numero_cuenta=$_POST['numero_cuenta'];
    $adultos=$_POST['adultos'];
    $niños=$_POST['niños'];


    $query="INSERT INTO reserva values (NULL, '$id_user', '$id_habitacion', '$inicio', '$fin', '$precio', '$numero_cuenta', '$adultos', '$niños')";
    $resultado = metodoPost($query);
    echo json_encode($resultado);
    
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $query="DELETE FROM reserva WHERE id='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    
    exit();
}




?>