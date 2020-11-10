import React from 'react';
import { TriangleDownIcon } from '@primer/octicons-react';
import S from './style';

function FiltersButton() {
  return (
    <S.FiltersButton>
      <S.ButtonText>Filters</S.ButtonText>
      <TriangleDownIcon />
    </S.FiltersButton>
  );
}

export default FiltersButton;
