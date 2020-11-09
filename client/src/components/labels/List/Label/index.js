import React, { useState, useEffect } from 'react';
import NewLabel from '../../newLabel'
import S from './style';

function Label({label}) {
  console.log('###', label)
  const [ isEditState, setIsEditState ] = useState(false);
  const handleEditLabel =()=>{
    setIsEditState(!isEditState);
    
  }

  const handleDeleteLabel =()=>{

  }

  return (
   <>
   {isEditState 
   ?
   <NewLabel 
    setIsEditState={setIsEditState}
    label={label}/>
    :
    <S.LabelWrapper>
      <S.LabelListWrapper>
        <S.LabelItemWrapper>
          <S.LabelItem color={label.color}>{label.name}</S.LabelItem>
        </S.LabelItemWrapper>
        <S.DescWrapper>{label.desc}</S.DescWrapper>
        <S.ButtonsWrapper>
          <S.EditButton
            className="label-button-item" 
            onClick={handleEditLabel}>Edit</S.EditButton>
          <S.DeleteButton 
          className="label-button-item" onClick={handleDeleteLabel}>Delete</S.DeleteButton>
        </S.ButtonsWrapper>
      </S.LabelListWrapper>
    </S.LabelWrapper>
    }
    </>
  );
}

export default Label;