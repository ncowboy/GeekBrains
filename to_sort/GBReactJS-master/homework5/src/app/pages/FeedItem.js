import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';

export default class FeedItem extends React.Component
{
    render(){
        return <div>
            <h1 className="mt-4"> {this.props.title}</h1>
            <p className="lead">by: {this.props.userId}</p>
            <p>Posted on <Moment unix format="DD MMMM YYYY HH:mm">{this.props.datetime}</Moment></p>
            <p className="lead">{this.props.body}</p>
            <p><a href="#">Далее</a></p>
            <hr />
        </div>

    }
}