import React from 'react';
import Menu from './menu/Menu';
import Brand from './Brand'
import Sandwich from './Sandwich'



export default class Nav extends React.Component {
    

  render(){
      
const items = [
    {
        href: '/',
        title: 'Домой',
    },
    {
        href: '/blog',
        title: 'Лента',
    },
    {
        href: '/comments',
        title: 'Комментарии',
    },
    {
        href: '/contacts',
        title: 'Контакты',
    }
];
      
      return <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                  <Sandwich/>  
                  <Brand/>
                  <Menu items={items} /> 
                </div>  
             </nav>  ;
  }
};


