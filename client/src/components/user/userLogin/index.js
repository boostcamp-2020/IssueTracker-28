import React from 'react';
import { MarkGithubIcon } from '@primer/octicons-react';
import Logo from '@images/logoImage.png';
import Cookie from '@utils/cookie';
import S from './style';

function UserLogin() {
  return (
    <>
      <S.LoginWrapper>
        <S.LoginImage alt="logo" src={Logo} />
        <a href="/api/auth/github">
          <S.LoginButton onClick={Cookie.saveUserInfo()}>
            Sign in with Github
            <MarkGithubIcon size={20} className="githubIcon" />
          </S.LoginButton>
        </a>
      </S.LoginWrapper>
    </>
  );
}

export default UserLogin;
