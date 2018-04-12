import React from 'react';


export default class AuthForm extends React.Component {
    render() {
        return <form role="form">
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox"/> Запомнить меня
            </label>
          </div>
<<<<<<< Updated upstream
          <button type="submit" className="btn btn-default">Отправить</button>
=======
          <button type="submit" className="btn btn-default">Войти</button>
>>>>>>> Stashed changes
               </form>
    }
}

