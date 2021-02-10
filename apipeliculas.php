<?php
include_once 'pelicula.php';
class ApiPeliculas{
    function getAll(){
        $pelicula = new Pelicula();
        $peliculas = array();
        $peliculas["antenas"] = array();
        $res = $pelicula->obtenerPeliculas();
        if($res->rowCount()){
            while ($row = $res->fetch(PDO::FETCH_ASSOC)){
    
                $item=array(
                    "id" => $row['id'],
                    "nombre" => $row['nombreRFID'],
                    "imagen" => $row['tagRFID'],
                );
                array_push($peliculas["antenas"], $item);
            }
        
            echo json_encode($peliculas);
        }else{
            echo json_encode(array('mensaje' => 'No hay elementos'));
        }
    }
}
?>