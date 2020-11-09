import React, { useState, useEffect } from 'react';
import { SyncIcon } from '@primer/octicons-react';
import * as api from '@api/label'
import ColorHandler from '@utils/colorHandler';
import {
  useLabelDispatch,
  createLabel,
  updateLabel,
  deleteLabel,
} from '@contexts/LabelContext';
import S from './style';

function NewLabel({setIsVisible, setIsEditState, label}) {
  const dispatch = useLabelDispatch();
  const isEdit = label ? true : false;
  const [ newLabelName, setNewLabelName ] = isEdit ? useState(label.name): useState(null);
  const [ newLabelDesc, setNewLabelDesc ] = isEdit ? useState(label.desc): useState(null);
  const [ newLabelColor, setNewLabelColor ] = isEdit ? useState(label.color): useState(ColorHandler.getRandomColor());
  const handleCancel=()=>{
    isEdit ? setIsEditState(false): setIsVisible(false);
  }
  const handleLabelName=(e)=>{
    setNewLabelName(e.target.value);
  }
  const handleLabelDesc=(e)=>{
    setNewLabelDesc(e.target.value);
  }
  const handleRandomColor=()=>{
    const newLabelColor = ColorHandler.getRandomColor();
    setNewLabelColor(newLabelColor);
  }
  const handleInputColor=(e)=>{
    setNewLabelColor(e.target.value);
  }
  // Label 생성 API요청
  const createLabelHandler=async()=>{
    const newLabelInfo = { name : newLabelName, desc : newLabelDesc, color : newLabelColor }
    await createLabel(dispatch, newLabelInfo);
    setIsVisible(false);
  }
  // Label 수정 API요청
  const editLabelHandler=async()=>{
    const editedLabelInfo = { name : newLabelName, desc : newLabelDesc, color : newLabelColor }
    await updateLabel(dispatch, label.id, editedLabelInfo);
  }
  // Label 삭제 API 요청
  const deleteLabelHandler=async()=>{
    await deleteLabel(dispatch, label.id);
  }

  return (
    <S.NewLabelWrapper isEdit={isEdit}> 
        { isEdit && <S.DeleteLabelButton onClick={deleteLabelHandler}>Delete</S.DeleteLabelButton> }
        <S.NewLabelItem fontColor={ColorHandler.getContrastColor(newLabelColor)} color={newLabelColor}>{newLabelName || 'Label preview'}</S.NewLabelItem>
        <S.CreateLabelWrapper>
            <S.NameWrapper className="create-label-item">
                <S.Title>Label Name</S.Title>
                <S.Input
                    value={newLabelName || ""}
                    onChange={handleLabelName}
                    placeholder="Label name">
                </S.Input>
            </S.NameWrapper>
            <S.DescWrapper className="create-label-item">
                <S.Title>Description</S.Title>
                <S.Input 
                      value={newLabelDesc || ""}
                      onChange={handleLabelDesc}
                      placeholder="Description (optional)">
                </S.Input>
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
                <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
                {isEdit ?
                  <S.CreateLabelButton
                  isValid={newLabelName && ColorHandler.checkIsHexColor(newLabelColor)}
                  onClick={editLabelHandler}>Save changes
                  </S.CreateLabelButton>
                  :
                  <S.CreateLabelButton
                  isValid={newLabelName && ColorHandler.checkIsHexColor(newLabelColor)}
                  onClick={createLabelHandler}>Create Label
                  </S.CreateLabelButton>
                }
            </S.ButtonsWrapper>
        </S.CreateLabelWrapper>
    </S.NewLabelWrapper>
  );
}

export default NewLabel;