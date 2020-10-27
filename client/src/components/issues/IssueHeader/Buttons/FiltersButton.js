import React from 'react';
import S from './style';
import {TriangleDownIcon} from '@primer/octicons-react'


function FiltersButton (){
    return (
        <S.FiltersButton>
          Filters
          <TriangleDownIcon/>
        </S.FiltersButton>
    );
};

export default FiltersButton;
