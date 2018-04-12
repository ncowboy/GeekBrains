import React from 'react';
import AuthForm from '../authForm/AuthForm';

export default class Modal extends React.Component {
    render() {
        return <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title" id="myModalLabel">Вход на сайт</h4>
                  </div>
                  <div className="modal-body">
                    <AuthForm/>
                  </div>
                </div>
              </div>
    }
}


