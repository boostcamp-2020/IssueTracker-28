import React, { useState } from 'react';
import Header from './header';
import NewLabel from './newLabel';
import List from './list';
import S from './style';


function Label() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <S.LabelWrapper>
      <Header setIsVisible={setIsVisible} isVisible={isVisible} />
      {isVisible && <NewLabel setIsVisible={setIsVisible} setIsUpdated={setIsUpdated} />}
      <List isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
    </S.LabelWrapper>
  );
}

export default Label;
