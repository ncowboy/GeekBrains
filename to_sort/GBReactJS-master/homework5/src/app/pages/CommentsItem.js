import React from 'react';
import { Link } from 'react-router';

export default class Comments extends React.Component {
   render() {
   return <div className="panel panel-primary">
       <div className="panel-heading">
         <h3 className="panel-title">{this.props.name}</h3>
       </div>
       <div className="panel-body">
         <p><Link to={'mailto:' + this.props.email}>{this.props.email}</Link></p>
         <p> {this.props.body}</p>
       </div>
       <div className="panel-footer">
         <button className="btn btn-default" role="button">Ответить</button>
       </div>
    </div>
   }      
}
