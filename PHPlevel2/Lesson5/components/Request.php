<?php
namespace components;


class Request implements ComponentInterface
{
    public $controller = 'main';
    public $action = 'index';
    public $nameSpaceController = '\controllers';

    public function init()
    {
        $uri = $_SERVER['REQUEST_URI'];

        $path = explode('/', $uri);
        if(count($path) == 3){
            if(!empty($path[1])){
                $this->controller = $path[1];
            }
            if(!empty($path[2])){
                $this->action = $path[2];
            }
        } else if (count($path) == 2){
            if(!empty($path[1])){
                $this->controller = $path[1];
            }
        }

        $this->callController();
    }

    protected function callController(){
        $classController = $this->nameSpaceController . '\\' . ucwords($this->controller) . 'Controller';

        $action = 'action' . ucwords($this->action);

        if(class_exists($classController)){
          $controllerInstance = new $classController;
            if(method_exists($controllerInstance, $action)){
                call_user_func_array([$controllerInstance, $action], []);
            } else {
                throw new \Exception('Метода не существует');
            }
        } else {
          throw new \Exception('404: запрошенная страница не существует');
        }
    }

}