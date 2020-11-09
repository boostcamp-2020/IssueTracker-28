import React, { useState } from 'react';
import { SyncIcon } from '@primer/octicons-react';
import ColorHandler from '@utils/colorHandler';
import S from './style';

function NewLabel({setIsCreateState}) {

  const [ newLabelName, SetNewLabelName ] = useState(null)
  const [ newLabelColor, SetNewLabelColor ] = useState(ColorHandler.getRandomColor());
  const handleIsCreate=()=>{
    setIsCreateState(false);
  }
  const handleLabelName=(e)=>{
    SetNewLabelName(e.target.value);
  }
  const handleRandomColor=()=>{
    const newLabelColor = ColorHandler.getRandomColor();
    SetNewLabelColor(newLabelColor);
  }
  const handleInputColor=(e)=>{
    SetNewLabelColor(e.target.value);
  }
  const createLabelHandler=()=>{
    // 새로운 Label 생성 API요청
  }

  return (
    <S.NewLabelWrapper> 
        <S.NewLabelItem fontColor={ColorHandler.getContrastColor(newLabelColor)} color={newLabelColor}>{newLabelName || 'Label preview'}</S.NewLabelItem>
        <S.CreateLabelWrapper>
            <S.NameWrapper className="create-label-item">
                <S.Title>Label Name</S.Title>
                <S.Input
                    onChange={handleLabelName}
                    placeholder="Label name">
                </S.Input>
            </S.NameWrapper>
            <S.DescWrapper className="create-label-item">
                <S.Title>Description</S.Title>
                <S.Input placeholder="Description (optional)"></S.Input>
            </S.DescWrapper>
            <S.ColorWrapper className="create-label-item">
                <S.Title>Color</S.Title>
                <S.NewColorWrapper>
                    <S.NewColorButton
                        color={newLabelColor}
                        iconColor={ColorHandler.getContrastColor(newLabelColor)}
                        onClick={handleRandomColor}
                        >
                        <SyncIcon/>
                    </S.NewColorButton>
                    <S.Input 
                        value={newLabelColor || '#'}
                        onChange={handleInputColor}>
                    </S.Input>
                </S.NewColorWrapper>
            </S.ColorWrapper>
            <S.ButtonsWrapper className="create-label-item">
                <S.CancelButton onClick={handleIsCreate}>Cancel</S.CancelButton>
                <S.CreateLabelButton
                    isValid={newLabelName && ColorHandler.checkIsHexColor(newLabelColor)}
                    onClick={createLabelHandler}>Create Label
                </S.CreateLabelButton>
            </S.ButtonsWrapper>
        </S.CreateLabelWrapper>
    </S.NewLabelWrapper>
  );
}

export default NewLabel;