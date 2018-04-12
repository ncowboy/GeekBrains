import React from 'react';
import TagsItem from './TagsItem';

const items = [
    {
      title: 'авто',
      href: '#'
    },
    {
      title: 'мото',
      href: '#'
    },
    {
      title: 'гребля',
      href: '#'
    },
    {
      title: 'фото',
      href: '#'
    },
    {
      title: 'лайфстайл',
      href: '#'
    },
    {
      title: 'кодинг',
      href: '#'
    },
    {
      title: 'reactJS',
      href: '#'
    },
    {
      title: 'frontend',
      href: '#'
    },
    {
      title: 'лухари',
      href: '#'
    },
    {
      title: 'жиза',
      href: '#'
    },
    {
      title: 'щедрооплачено',
      href: '#'
    }
];


export default class Tags extends React.Component {
    render() {
        let tagsItems = items.map(function (value, index) {
            return <TagsItem key={'prefix' + index} href={value.href} title={value.title} />;
        });

        return <div><h2>Тэги</h2>
                {tagsItems}</div>;
    }
}


