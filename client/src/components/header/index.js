import React from 'react';
import { useHistory, Link, Redirect } from "react-router-dom";
import { MarkGithubIcon } from '@primer/octicons-react';
import { HeaderWrapper, HomeButton } from './style';

function Header() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <HeaderWrapper>
      <HomeButton onClick={redirectToHome}>
        <MarkGithubIcon className='github-icon' />
      </HomeButton>
    </HeaderWrapper>
  );
}

export default Header;