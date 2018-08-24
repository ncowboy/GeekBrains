<?php

namespace models;

use components\Db;

class LoginForm
{
    
    public $username;
    public $password;
    
    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }
    
    public function login()
    {
        return $this->validateUser($this->username, $this->password);
    }
    
    public function validateUser($username, $password)
    {
        $dbConn = new Db();
        $user   = $dbConn->findWhere('users', 'username', $username);
        if (!empty($user)) {
            return $user[0]['password'] === $password;
        }
    }
}