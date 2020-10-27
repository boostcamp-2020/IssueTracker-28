import React from 'react';
import {FiltersButton, LabelsButton, MilestonesButton, NewIssueButton} from './Buttons'
import SearchBar from './SearchBar'
import S from './style';

function IssueHeader() {
  return (
    <>
        <FiltersButton />
        <SearchBar />
        <LabelsButton />
        <MilestonesButton />
        <NewIssueButton />
    </>
  );
}

export default IssueHeader;