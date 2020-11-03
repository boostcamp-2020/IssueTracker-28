import React, { useEffect } from 'react';
import { MarkGithubIcon } from '@primer/octicons-react';
import Logo from '@images/issuelogo.png';
import Cookie from '@util/cookie';
import { useUserState, useUserDispatch } from '@contexts/UserContext';
import S from './style';

function UserLogin() {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    Cookie.deleteCookie('auth_token');
    Cookie.deleteCookie('user_id');
    Cookie.deleteCookie('id');
    window.location.href = '/';
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginImage alt="logo" src={Logo} />
        <a href="/api/auth/github">
          <S.LoginButton onClick={Cookie.login()}>
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
