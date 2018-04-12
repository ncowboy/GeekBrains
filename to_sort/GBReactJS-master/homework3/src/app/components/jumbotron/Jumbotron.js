import React from 'react';

export default class Jumbotron extends React.Component {
    render() {
        return <div className="jumbotron">
                 <div className="container">
                   <h1>Добро пожаловать в мой блог!</h1>
                   <p>Войдите на сайт для доступа к скрытым разделам</p>
                   <p><a className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal" role="button">Войти</a></p>
                 </div>  
                </div>
    }
}


