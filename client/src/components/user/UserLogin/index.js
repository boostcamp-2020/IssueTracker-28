import React from 'react';
import S from './style';
import { MarkGithubIcon } from '@primer/octicons-react';
import Logo from '../../../../public/images/issuelogo.png'

function UserLogin() {
    return (
        <>
            <S.LoginWrapper>
                <S.LoginImage alt="logo" src={Logo}/>
                <a href="http://localhost:3000/api/auth/github"><S.LoginButton >Sign in with Github<MarkGithubIcon size={18} className="githubIcon"/></S.LoginButton></a>
                <a href="http://localhost:3000/api/auth/logout"><S.LogoutButton>Logout</S.LogoutButton></a>
            </S.LoginWrapper>
        </>
    );
}

export default UserLogin;