import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import Tags from '../components/tags/Tags';

export default class MainPage extends React.Component {
   render() {
       return <div>
         <div className="container">
           <div className="row">
             <div id="content" className="container col-md-10">
               <Jumbotron/>
               <p>
                  Sed quis enim sit amet turpis luctus ullamcorper eu in turpis. Duis libero risus, lacinia ac aliquam vitae, faucibus at arcu. Vivamus vel sollicitudin libero. Sed finibus ligula ac fermentum pretium. Curabitur sodales odio eget leo consectetur, at convallis ex dictum. Cras eget purus a quam semper ultrices eget at tellus. Sed eget sapien non neque semper malesuada. Curabitur malesuada condimentum pulvinar.
               </p> 
               <p>
                  Duis tincidunt, mi quis lacinia eleifend, metus nisi dictum enim, id ultrices purus ex nec ante. Sed a enim ullamcorper, blandit neque ut, interdum diam. Proin eget dignissim tellus, quis pretium enim. Nunc aliquam mauris at enim placerat, at finibus turpis euismod. Nulla a est id risus mollis egestas sed sit amet dui. Proin congue vehicula neque sit amet facilisis. Duis egestas auctor pulvinar. Curabitur ut accumsan ligula, auctor egestas nunc. Integer sit amet eros in neque placerat volutpat. Proin eget urna eget quam malesuada finibus imperdiet vitae velit. Etiam ullamcorper venenatis arcu, eget elementum dolor efficitur porttitor. Sed feugiat, tellus sed tristique euismod, est erat condimentum urna, sed vestibulum tellus ipsum tempus magna. Pellentesque nec metus porttitor, vulputate arcu a, rhoncus erat. Nulla accumsan nisi dui, in convallis lectus sagittis ac.
               </p>
             
             </div>
             <div id="sidebar" className="col-md-2"> <Tags />  </div>
           </div> 
         </div>
       </div>
   }

 
   }


