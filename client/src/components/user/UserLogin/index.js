import React from 'react';
import S from './style';
import { MarkGithubIcon } from '@primer/octicons-react';
import Logo from '@images/issuelogo.png';
import LocalStorage from '@util/localStorage';
import Cookie from '@util/cookie';

function UserLogin() {
  const logoutHandler = () => {
    LocalStorage.clear();
    Cookie.deleteCookie('user');
    Cookie.deleteCookie('token');
    window.location.href = '/';
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginImage alt="logo" src={Logo} />
        <a href="http://localhost:3000/api/auth/github">
          <S.LoginButton>
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
