import React, { useState } from 'react';
import { SyncIcon } from '@primer/octicons-react';
import getRandomColor from '@utils/getRandomColor';
import S from './style';

function NewLabel({setIsCreateState}) {
  const [ newLabelName, SetNewLabelName ] = useState(null)
  const [ newLabelColor, SetNewLabelColor ] = useState(getRandomColor());
  const handleIsCreate=()=>{
    setIsCreateState(false);
  }
  const handleLabelName=(e)=>{
    SetNewLabelName(e.target.value);
  }
  const HandleLabelColor=()=>{
    const newLabelColor = getRandomColor();
    SetNewLabelColor(newLabelColor);
  }

  const createLabelHandler=()=>{
    
  }


  return (
    <S.NewLabelWrapper> 
        <S.NewLabelItem color={newLabelColor}>{newLabelName || 'Label preview'}</S.NewLabelItem>
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
                    <S.NewColorButton color={newLabelColor} onClick={HandleLabelColor}><SyncIcon/></S.NewColorButton>
                    <S.Input value={newLabelColor}></S.Input>
                </S.NewColorWrapper>
            </S.ColorWrapper>
            <S.ButtonsWrapper className="create-label-item">
                <S.CancelButton onClick={handleIsCreate}>Cancel</S.CancelButton>
                <S.CreateLabelButton onClick={createLabelHandler} >Create Label</S.CreateLabelButton>
            </S.ButtonsWrapper>
        </S.CreateLabelWrapper>
    </S.NewLabelWrapper>
  );
}

export default NewLabel;