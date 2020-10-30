import React,{useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import UserPage from './pages/UserPage';
import {getToken} from './util/getToken'
import localStorage from './util/localStorage'

const App = () => {
  let [userState, setUserState] = useState({
    user : '',
    token : '',
    authenticated : false
  })

  useEffect(()=>{
      let cookie = document.cookie;
      if (typeof(cookie)!=='undefined' && cookie !==''){
        const token = getToken('token');
        const user = getToken('user');
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        setUserState({
            user,
            token,
            authenticated : true
        })
      }
    }, [])
    
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