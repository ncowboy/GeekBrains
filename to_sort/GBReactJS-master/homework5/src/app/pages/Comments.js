import React from 'react';
import axios from 'axios';

import CommentsItem from './CommentsItem';

export default class Comments extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            comments: [],
        };

        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then((response) => {
                let     { data } = response;
                this.setState({
                    comments: data,
                });
            }, (reject) => {
                console.log('Error');
            });
    }

   render() {
    if(!this.state.comments.length)
      return <div className="container">Данные загружаются...</div>;
      
      let comments = this.state.comments.map((comment, index) => {
            return <CommentsItem key={index} {...comment} />;
        });        

        return <div className="container col-md-4 col-md-offset-3">
            {comments}
                </div>
    }
 }      

