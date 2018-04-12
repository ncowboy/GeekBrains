import React from 'react';
import FeedPost from './FeedPost';


const posts = [
    {
        datetime: 1509546706,
        tags: ['авто', 'мото'],
        text: 'Morbi vel tincidunt enim. Aliquam condimentum lacinia odio, in rutrum arcu malesuada eu. Phasellus porta ante vel dolor congue consectetur. Pellentesque id sapien ut est ornare semper eget id nunc. Quisque accumsan ante eu tortor facilisis, non convallis augue sodales. Nunc ante lectus, interdum eget tellus a, finibus facilisis dolor. Sed tempus est at magna porta feugiat. Praesent ligula arcu, volutpat vitae ornare hendrerit, efficitur sed leo. Sed quis enim elit'
    },  
     {
        datetime: 1510759225,
        tags: ['авто', 'гребля'],
        text: 'Nunc in fermentum dui. Integer ac tortor porttitor quam fringilla aliquet. Aenean pharetra ornare aliquet. Cras orci ante, ullamcorper quis convallis vitae, sollicitudin vel purus. Curabitur convallis justo non leo sollicitudin aliquet. Vestibulum iaculis, libero ac luctus convallis, neque magna egestas turpis, et congue tortor turpis sed orci. Vivamus sed hendrerit tellus, non placerat neque. Nullam justo elit, varius ut dui in, dictum pretium turpis. Etiam scelerisque risus eget nulla faucibus commodo. Vestibulum suscipit ex eget diam pharetra, in ornare leo pellentesque. Proin a tellus facilisis, pellentesque mi quis, semper turpis. Nam egestas dui quis elementum suscipit. Ut ac justo eleifend tortor ornare suscipit at eget eros.'
    }, 
    {
        datetime: 1509787006,
        tags: ['лухари', 'кодинг', 'жиза', 'frontend', 'щедрооплачено'],
        text: 'Nunc in fermentum dui. Integer ac tortor porttitor quam fringilla aliquet. Aenean pharetra ornare aliquet. Cras orci ante, ullamcorper quis convallis vitae, sollicitudin vel purus. Curabitur convallis justo non leo sollicitudin aliquet. Vestibulum iaculis, libero ac luctus convallis, neque magna egestas turpis, et congue tortor turpis sed orci. Vivamus sed hendrerit tellus, non placerat neque. Nullam justo elit, varius ut dui in, dictum pretium turpis. Etiam scelerisque risus eget nulla faucibus commodo. Vestibulum suscipit ex eget diam pharetra, in ornare leo pellentesque. Proin a tellus facilisis, pellentesque mi quis, semper turpis. Nam egestas dui quis elementum suscipit. Ut ac justo eleifend tortor ornare suscipit at eget eros.'
    } 
];

export default class Feed extends React.Component {
    constructor()
    {
        super(...arguments);
        this.state = {
            sort: '0',
            text: 'Сначала старые',
            arrowClass: 'glyphicon glyphicon-arrow-down'
        };
    }

    render() {
      let order;
      let direct = function(a, b) { return a.props.datetime < b.props.datetime };
      let reversed = function(a, b) { return a.props.datetime > b.props.datetime };
      this.state.sort == 1 ? order = direct : order = reversed;  
      let postsItems = posts.map(function (value, index) {
            return <FeedPost key={index} datetime={value.datetime} tags={value.tags} text={value.text} />;
        }).sort(order);


        return <div><h2>Feed</h2>
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
         {postsItems}</div>;
       
    };
    
}


