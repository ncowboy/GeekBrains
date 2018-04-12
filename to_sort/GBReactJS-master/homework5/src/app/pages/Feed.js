import React from 'react';
import axios from 'axios';
import FeedItem from './FeedItem';

export default class Feed extends React.Component
{
    constructor(){
        super(...arguments);

    // Добавим даты к постам. Что за пост в блоге без даты.
        let dates = [];
        for (var i = 0; i < 100; i++) {
        dates.push(Math.floor(Math.random() * 91065600) + 1420070400);
         }
        
        this.state = {
            posts: [],
            dates: dates,
            sort: '0',
            text: 'Сначала старые',
            arrowClass: 'glyphicon glyphicon-arrow-down'
        };

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                let { data } = response;
                this.setState({
                    posts: data,
                });
            }, (reject) => {
                console.log('Error');
            });
    }

    render(){
      if(!this.state.posts.length)
      return <div className="container">Данные загружаются...</div>;

      let order;
      let direct = function (a, b) { 
          if (a.props.datetime < b.props.datetime) 
            return 1; 
          if (a.props.datetime > b.props.datetime) 
            return -1};

      let reversed = function(a, b) { 
          if (a.props.datetime > b.props.datetime) 
            return 1; 
          if (a.props.datetime < b.props.datetime) 
            return -1};

      this.state.sort == 1 ? order = direct : order = reversed;  

      let posts = this.state.posts.map((post, index) => {
            return <FeedItem key={index} datetime={this.state.dates[index]} {...post} />;
        }).sort(order);        

      return <div className="container">
                <button className="btn btn-default" onClick={()=>{
                                        this.state.sort == 0 ? 
                                        this.setState({
                                            sort: 1, 
                                            text: 'Сначала новые', 
                                            arrowClass: 'glyphicon glyphicon-arrow-up'})
                                        : this.setState({
                                            sort: 0,
                                            text: 'Сначала старые', 
                                            arrowClass: 'glyphicon glyphicon-arrow-down'});
                                }}> {this.state.text} <span className={this.state.arrowClass} /></button>  
            {posts}
        </div>
  }
}
