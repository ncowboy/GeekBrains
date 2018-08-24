<?php

namespace models;

class User

{
   // public $username;
   // public $password;
    
    public static function findByUsername($username){
        $dbConn = new \components\Db();
        $result = $dbConn->findWhere('users', 'username', $username );
        return $result;
    }
}