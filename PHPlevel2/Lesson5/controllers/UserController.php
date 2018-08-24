<?php
/**
 * Created by PhpStorm.
 * User: index
 * Date: 08.08.2017
 * Time: 18:49
 */

namespace controllers;
use components\BaseController;
use models\User;

class UserController extends BaseController
{
    public function actionGet()
    {
        $model = new User();
        if(isset($_POST['login'])){
            $login = $_POST['login'];
            //$model->saveUser($login, '');
        }


        $data = $model->getUsers();
        echo json_encode($data);
        //require_once 'views/layout';
    }
}