import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import UserPage from './pages/UserPage';
import Cookie from './utils/cookie';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  // const [userState, setUserState] = useState({
  //   user: '',
  //   token: '',
  //   authenticated: false,
  // });

  // const isAuthenticated = () => {
  //   const user = localStorage.getItem('user_id') || undefined;
  //   const token = localStorage.getItem('auth_token') || undefined;
  //   let userObj = {
  //     user,
  //     token,
  //     authenticated: true,
  //   };
  //   if (typeof user === 'undefined') {
  //     const { cookie } = document;
  //     userObj = Cookie.hasCookie(userObj, cookie);
  //   }

  //   // Todo : userState 관리
  //   // setUserState(userObj)
  // };

  // isAuthenticated();
  return (
    <UserProvider>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (localStorage.getItem('auth_token')) return <IssuePage />;
            return <UserPage />;
          }}
        />
        {/* <Route exact path="/" component={IssuePage} /> */}
        {/* <Route path="/login" component={UserPage} /> */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </UserProvider>
  );
};
export default App;
