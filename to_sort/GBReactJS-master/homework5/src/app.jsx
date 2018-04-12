import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/MainPage';
import Feed from './app/pages/Feed';
import Comments from './app/pages/Comments';
import Contacts from './app/pages/Contacts';

const app = document.getElementById('app');


ReactDOM.render(
   <Router history={browserHistory}>
     <Route path="/" component={Layout}>
       <IndexRoute component={MainPage} />
       <Route path="blog" component={Feed} />
       <Route path="comments" component={Comments} />
       <Route path="contacts" component={Contacts} />
     </Route>     
   </Router>
   , app);

