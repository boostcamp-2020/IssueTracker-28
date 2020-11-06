import React from 'react';
import S from './style';
import BS from '@components/issues/IssueHeader/Buttons/style';

const ButtonWrapper = (buttonState, isEditClicked, setIsEditClicked) => {
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
  }
};

export default ButtonWrapper;
