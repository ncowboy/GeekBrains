import React from 'react';
import Nav from '../components/nav/Nav';
import MainPage from '../pages/MainPage';
import Footer from '../components/footer/Footer';


export default class Layout extends React.Component {

   render() {
    
       return <div>
       <div id="header" className="container"> <Nav/> </div>  
       {this.props.children}
       <Footer />
       </div>
    
   }      
}


