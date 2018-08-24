<?php

namespace components;

class Db {
  
  public static function connect() {
    return new \PDO('mysql:host=localhost;dbname=mipoint', 'root', '');
  }
  
   public function findWhere($table, $key, $value){
      $pdo = self::connect();
      $stmt = $pdo->prepare("SELECT * FROM {$table} WHERE {$key} = :value");
      $stmt->execute(['value' => $value]);
      $result = [];
      while ($row = $stmt->fetch(\PDO::FETCH_ASSOC))
      {
          $result[] = $row;
      }
      return $result;
    }     
}
