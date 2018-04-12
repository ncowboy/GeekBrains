import React from 'react';
import TagsItem from './TagsItem';

export default class Tags extends React.Component {
    render() {
        let tagsItems = this.props.items.map(function (value, index) {
            return <TagsItem key={'prefix' + index} href={value.href} title={value.title} />;
        });

        return <div><h2>Тэги</h2>
                {tagsItems}</div>;
    }
}


