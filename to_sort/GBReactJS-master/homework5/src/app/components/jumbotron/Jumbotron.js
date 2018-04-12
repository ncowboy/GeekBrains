import React from 'react';
import { Link } from 'react-router';

export default class Jumbotron extends React.Component {
    render() {
        return <div className="jumbotron">
                 <div className="container">
                   <h1>Добро пожаловать на лучшую блог-платформу на планете!</h1>
                   <p>Нанотехнологии! Криптовалюта! Котики!</p>
                   <p><Link className="btn btn-success btn-lg" to="blog" role="button">К записям</Link></p>
                 </div>  
                </div>
    }
}


