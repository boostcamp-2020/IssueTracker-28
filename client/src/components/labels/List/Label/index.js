import React, { useState } from 'react';
import NewLabel from '../../newLabel'
import {
  useLabelDispatch,
  deleteLabel,
} from '@contexts/LabelContext';
import ColorHandler from '@utils/colorHandler'
import S from './style';

function Label({ label, isEditState, setIsUpdated }) {
  const dispatch = useLabelDispatch();
  const handleEditLabel = () => {
    setIsEditState(!isEditState);
  }
  const handleDeleteLabel = () => {
    if (confirm('Are you sure? Deleting a label will remove it from all issues and pull requests.')) {
      deleteLabel(dispatch, label.id);
      setIsUpdated(true);
    } else {
      return false;
    }
  }
  return (
    <>
      {isEditState
        ?
        <NewLabel
          setIsEditState={setIsEditState}
          label={label} />
        :
        <S.LabelWrapper>
          <S.LabelListWrapper>
            <S.LabelItemWrapper>
              <S.LabelItem fontColor={ColorHandler.getContrastColor(label.color)} color={label.color}>{label.name}</S.LabelItem>
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

export default React.memo(Label);