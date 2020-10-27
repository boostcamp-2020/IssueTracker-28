import React from 'react';
import S from './style';
import {TagIcon} from '@primer/octicons-react'


function LabelsButton (){
  return (
    <S.LabelsButton>
      <TagIcon size={14}/>
        <S.ButtonText>Labels</S.ButtonText>
        <S.ShowTotalNum>0</S.ShowTotalNum>
      </S.LabelsButton>
  );
};

export default LabelsButton;
