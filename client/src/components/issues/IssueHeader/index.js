import React from 'react';
import { LabelsButton, MilestonesButton, NewIssueButton } from './Buttons';
import SearchBar from './SearchBar';
import Filters from './Filters';
import S from './style';
const FILTERS_MENU = [
  'Open issues and pull requests',
  'Your issues',
  'Your pull requests',
  'Everything assigned to you',
  'Everything mention you',
];
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
