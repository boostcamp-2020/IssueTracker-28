import React from 'react';
import Book from '@images/headerbook.png';
import S from './style';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderImage alt="book" src={Book} />
      <S.HeaderText>ISSUES</S.HeaderText>
    </S.HeaderWrapper>
  );
}

export default Header;
