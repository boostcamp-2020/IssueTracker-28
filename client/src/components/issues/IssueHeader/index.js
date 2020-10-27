import React from 'react';
import {FiltersButton, LabelsButton, MilestonesButton, NewIssueButton} from './Buttons'
import SearchBar from './SearchBar'
import S from './style';

function IssueHeader() {
  return (
    <>
        <S.IssueHeader>
            <S.HeaderItemWrapper>
                <FiltersButton />
                <SearchBar />
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