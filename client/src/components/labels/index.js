import React, { useState } from 'react';
import Header from './Header';
import NewLabel from './NewLabel';
import List from './List';
import S from './style';

function Label() {
  const [ isCreateState, setIsCreateState] = useState(false);
  return (
    <S.LabelWrapper>
      <Header setIsCreateState={setIsCreateState} isCreateState={isCreateState}/>
      {isCreateState && <NewLabel setIsCreateState={setIsCreateState}/>}
      <List />
    </S.LabelWrapper>
  );
}

export default Label;
