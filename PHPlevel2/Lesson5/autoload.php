<?php

function autoload($className)
{
    $filename = str_replace('\\', '/', __DIR__ . '/' . $className).'.php';
    
    if(file_exists($filename))
    {
        require_once $filename;
    }
    
}

spl_autoload_register('autoload');