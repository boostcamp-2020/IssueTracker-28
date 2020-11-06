import React from 'react';
import { RepoIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';
import S from './style';

function Header() {
  const history = useHistory();

  return (
    <S.HeaderWrapper>
      <RepoIcon className="repo" size={16} />
      <S.HeaderText onClick={() => history.push('/')}>ISSUES</S.HeaderText>
    </S.HeaderWrapper>
  );
}

export default Header;
