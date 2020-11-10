import React from 'react';
import BS from '@components/issues/header/buttons/style';
import { useHistory } from 'react-router-dom';
import S from './style';

function ButtonWrapper(buttonState, isEditClicked, setIsEditClicked) {
  const history = useHistory();

  switch (buttonState) {
    case 'NEW_ISSUE':
      return (
        <S.ButtonWrapper justifyContent="space-between">
          <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
          <BS.NewIssueButton>Submit new issue</BS.NewIssueButton>
        </S.ButtonWrapper>
      );
    case 'UPDATE_ISSUE':
      return (
        <S.ButtonWrapper justifyContent="flex-end">
          <S.EditCancelButton onClick={() => setIsEditClicked(!isEditClicked)}>
            Cancel
          </S.EditCancelButton>
          <BS.NewIssueButton>Update Comment</BS.NewIssueButton>
        </S.ButtonWrapper>
      );
    case 'NEW_COMMENT':
      return (
        <S.ButtonWrapper justifyContent="flex-end">
          <S.EditCancelButton onClick={() => alert('NEW_COMMENT')}>Close Issue</S.EditCancelButton>
          <BS.NewIssueButton>Comments</BS.NewIssueButton>
        </S.ButtonWrapper>
      );
    case 'UPDATE_COMMENT':
      return (
        <S.ButtonWrapper justifyContent="flex-end">
          <S.EditCancelButton onClick={() => setIsEditClicked(!isEditClicked)}>
            Cancel
          </S.EditCancelButton>
          <BS.NewIssueButton>Update Comment</BS.NewIssueButton>
        </S.ButtonWrapper>
      );
    default:
  }
}

export default ButtonWrapper;
