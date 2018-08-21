<?php

namespace models;

class DbImage {
  
  public function getImages(){
    $connect = Db::connect();
    $result = mysqli_query($connect, "SELECT * FROM images ORDER BY count DESC");
    $images = [];
      while($row = mysqli_fetch_assoc($result)){
        $images[] = $row;
      }
      mysqli_close($connect);
      return $images;
  }
  
  public function getImage($id) {
     $connect = Db::connect();
     $result = mysqli_query($connect, "SELECT * FROM images WHERE id={$id}");
     mysqli_close($connect);
     return mysqli_fetch_assoc($result); 
  }
  
  public function insert($file, $size){
    $connect = Db::connect();
    $result = mysqli_query($connect, "INSERT INTO images(name, thumb_name, size)VALUES('$file', 'resized_$file', '$size')");
    mysqli_close($connect);
    return $result;
  }
}
