import React from 'react';

export default class TagsItem extends React.Component {
 render(){
        return <a href={this.props.href}>#{this.props.title}</a>
    }
}