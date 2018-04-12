import React from 'react';
import Content from '../components/content/Content';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Tags from '../components/tags/Tags';
import Modal from '../components/modal/Modal';

export default class MainPage extends React.Component {
   render() {
       return <div>
         <div id="jumbotron"> <Jumbotron/> </div>
         <div className="container">
           <div className="row">
             <div id="content" className="container col-md-9"> <Content/> </div>
             <div id="sidebar" className="col-md-3"> <Tags />  </div>
           </div> 
         </div>
         <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <Modal/>       
      </div>  
       </div>
   }
   }


