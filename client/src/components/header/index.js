import React from 'react';
import { useHistory } from 'react-router-dom';
import Book from '@images/headerbook.png';
import S from './style';

function Header() {
  const history = useHistory();

  return (
    <S.HeaderWrapper>
      <S.HeaderImage alt="book" src={Book} />
      <S.HeaderText onClick={() => history.push('/')}>ISSUES</S.HeaderText>
    </S.HeaderWrapper>
  );
}

export default Header;
