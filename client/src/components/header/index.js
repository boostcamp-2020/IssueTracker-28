import React from 'react';
import { useHistory } from "react-router-dom";
import { MarkGithubIcon } from '@primer/octicons-react';
import { HeaderWrapper, HomeButton } from './style';

function Header() {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <HomeButton onClick={() => history.push('/')}>
        <MarkGithubIcon className='github-icon' />
      </HomeButton>
    </HeaderWrapper>
  );
}

export default Header;