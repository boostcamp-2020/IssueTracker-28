import React, { useEffect } from 'react';
import Header from './Header';
import List from './List';
import S from './style';

function Label() {
  return (
    <S.LabelWrapper>
      <Header />
      <List />
    </S.LabelWrapper>
  );
}

export default Label;
