<?php

include 'BD.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD']=='GET'){
    if(isset($_GET['id'])){
        $query="select * from carrito where id=".$_GET['id'];
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    }else{
        $query="select * from carrito";
        $resultado=metodoGet($query);
        echo json_encode($resultado->fetchAll()); 
    }
    exit();
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $id_user=$_POST['id_user'];
    $ids_productos=$_POST['ids_productos'];
    $precio=$_POST['precio'];
    $numero_cuenta=$_POST['numero_cuenta'];



    $query="INSERT INTO carrito values (NULL, '$id_user', '$precio', '$numero_cuenta', '$ids_productos')";
    $resultado = metodoPost($query);
    echo json_encode($resultado);
    
    exit();
}

if($_POST['METHOD']=='DELETE'){
    unset($_POST['METHOD']);
    $id=$_GET['id'];
    $query="DELETE FROM carrito WHERE id='$id'";
    $resultado=metodoDelete($query);
    echo json_encode($resultado);
    
    exit();
}




?>