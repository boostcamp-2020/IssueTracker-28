import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import UserPage from './pages/UserPage';
import Cookie from './util/cookie'
import LocalStorage from './util/localStorage'
const App = () => {
  let [userState, setUserState] = useState({
    user: '',
    token: '',
    authenticated: false
  })

  const isAuthenticated = () => {
    let userObj = {
      user,
      token,
      authenticated: true
    };
    const user = LocalStorage.getItem('user') || undefined
    const token = LocalStorage.getItem('token') || undefined
    if (typeof user === "undefined") {
      let cookie = document.cookie;
      userObj = Cookie.hasCookie(userObj, cookie)
    }

    // Todo : userState 관리
    //setUserState(userObj)
  }

  isAuthenticated()
  return (
    <Switch>
      <Route exact path="/" component={IssuePage} />
      <Route path="/login" component={UserPage} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};
export default App;