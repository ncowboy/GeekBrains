import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';



export default class FeedPost extends React.Component {
    render() {
        return <div>
            <div className="page-header">
              <h1><small><Moment unix format="DD MMMM YYYY HH:mm">{this.props.datetime}</Moment></small></h1>
            </div>
              <p>{this.props.text}</p> 
              <p><span>Тэги: </span>{this.props.tags.join(', ')}</p>
            </div>
    }
}