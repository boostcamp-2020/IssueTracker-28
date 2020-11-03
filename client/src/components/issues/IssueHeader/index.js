import React, { useState } from 'react';
import { LabelsButton, MilestonesButton, NewIssueButton } from './Buttons';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';

function IssueHeader() {
  const [filterValue, setFilterValue] = useState('');
  return (
    <>
      <S.IssueHeader>
        <S.HeaderItemWrapper>
          <Filters filterValue={filterValue} setFilterValue={setFilterValue} />
          <SearchBar filterValue={filterValue} />
        </S.HeaderItemWrapper>
        <S.HeaderItemWrapper>
          <LabelsButton />
          <MilestonesButton />
        </S.HeaderItemWrapper>
        <NewIssueButton />
      </S.IssueHeader>
    </>
  );
}

export default IssueHeader;
