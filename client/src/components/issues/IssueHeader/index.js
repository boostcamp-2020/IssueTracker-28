import React from 'react';
import {LabelsButton, MilestonesButton, NewIssueButton} from './Buttons'
import SearchBar from './SearchBar'
import Filters from './Filters'
import S from './style';

function IssueHeader() {
  return (
    <>
        <S.IssueHeader>
            <S.HeaderItemWrapper>
                <Filters />
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