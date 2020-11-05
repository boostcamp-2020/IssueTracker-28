import React from 'react';
import { useHistory } from 'react-router-dom';

import S from './style';

function NewIssueButton() {
  const history = useHistory();

  return <S.NewIssueButton onClick={() => history.push('/new')}>New issue</S.NewIssueButton>;
}

export default NewIssueButton;
