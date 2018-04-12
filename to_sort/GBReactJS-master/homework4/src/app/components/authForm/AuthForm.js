import React from 'react';


export default class AuthForm extends React.Component {
    render() {
        return <form role="form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/> Проверить меня
            </label>
          </div>
          <button type="submit" className="btn btn-default">Отправить</button>
               </form>
    }
}

