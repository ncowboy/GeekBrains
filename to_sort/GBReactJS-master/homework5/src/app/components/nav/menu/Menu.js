import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
  
    render() {
       
        let menuItems = this.props.items.map(function (value, index) {
            return <MenuItem key={'prefix' + index} href={value.href} title={value.title} active={value.href === window.location.pathname}/>;
        });

        return <div id="menu" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                {menuItems}
            </ul>
           
        </div>;
       
    }
}