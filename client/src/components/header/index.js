import React from 'react';
import { RepoIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';
import S from './style';

function Header() {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <S.HeaderWrapper>
      <RepoIcon className="repo" size={16} />
      <S.HeaderText onClick={() => history.push('/')}>ISSUES</S.HeaderText>
      <S.LogoutButton onClick={logoutHandler}>Logout</S.LogoutButton>
    </S.HeaderWrapper>
  );
}

export default Header;
