<?php

namespace controllers;

use components\BaseController;
use models\LoginForm;

class MainController extends BaseController
{
    public function actionIndex()
    {
        return $this->redirect('main/login');
    }
    
    public function actionLogin()
    {
        if (isset($_POST['submit'])) {
            
            $model = new LoginForm($_POST['username'], $_POST['password']);
            if ($model->login()) {
                return $this->redirect('my');
            }
        } else {
            return $this->render('login.tpl');
        }
    }
}