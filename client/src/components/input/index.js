import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BS from '@components/issues/IssueHeader/Buttons/style';
import S from './style';
import InputForm from './InputForm/index';

function Input() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [isDelay, setIsDelay] = useState(false);

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <S.InputWrapper>
      <S.InputTitle placeholder="Title" value={title} onChange={titleHandler} />
      <S.WriteWrapper>
        <S.WriteTitle>Write</S.WriteTitle>
        <S.WritePreview>Preview</S.WritePreview>
        <S.Line />
        <InputForm
          comment={comment}
          setComment={setComment}
          isDelay={isDelay}
          setIsDelay={setIsDelay}
        />
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.CancelButton onClick={() => history.push('/')}>Cancel</S.CancelButton>
        <BS.NewIssueButton>Submit new issue</BS.NewIssueButton>
      </S.ButtonWrapper>
    </S.InputWrapper>
  );
}

export default Input;
