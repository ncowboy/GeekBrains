import React from 'react';
import Nav from '../components/nav/Nav';
import MainPage from '../pages/MainPage';


export default class Layout extends React.Component {
   render() {
       return <div>
       <div id="header" className="container"> <Nav/> </div>  
       <MainPage />
       </div>
   }      
}


