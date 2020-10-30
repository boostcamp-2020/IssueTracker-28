import React,{useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import UserPage from './pages/UserPage';
import axios from 'axios';
import {getToken} from './util/getToken'

const App = () => {
  let [userState, setUserState] = useState({
    user : '',
    authenticated : false
  })

  useEffect(()=>{
       // axios
        // .get('http://localhost:3000/api/auth/test', {
        // })
        // .then((result) => console.log(result))
        // .catch((error) => {
        //   console.log(error);
        // });
      let cookie = document.cookie;
      if (typeof(cookie)!=='undefined' && cookie !==''){
        const token = getToken('csrftoken');
        const user = getToken('user');
        //  token -> jwt토큰으로 바꾼뒤, localStorage에 저장 
        setUserState({
            user : user,
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