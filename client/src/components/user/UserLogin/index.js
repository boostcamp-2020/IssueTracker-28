import React, { useEffect } from 'react';
import { MarkGithubIcon } from '@primer/octicons-react';
import S from './style';
import Logo from '../../../../public/images/issuelogo.png';
import Cookie from '../../../utils/cookie';
import { useUserState, useUserDispatch } from '../../../contexts/UserContext';

function UserLogin() {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    Cookie.deleteCookie('user');
    Cookie.deleteCookie('token');
    window.location.href = '/';
  };

  const loginHandler = () => {
    const user = localStorage.getItem('user_id') || undefined;
    const token = localStorage.getItem('auth_token') || undefined;
    let userObj = {
      user,
      token,
      authenticated: true,
    };
    if (typeof user === 'undefined') {
      const { cookie } = document;
      userObj = Cookie.hasCookie(userObj, cookie);
    }
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginImage alt="logo" src={Logo} />
        <a href="/api/auth/github">
          <S.LoginButton onClick={loginHandler}>
            Sign in with Github
            <MarkGithubIcon size={18} className="githubIcon" />
          </S.LoginButton>
        </a>
        <S.LogoutButton onClick={logoutHandler}>Logout</S.LogoutButton>
      </S.LoginWrapper>
    </>
  );
}

export default UserLogin;
