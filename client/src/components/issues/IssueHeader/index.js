import React from 'react';
import {LabelsButton, MilestonesButton, NewIssueButton} from './Buttons'

function IssueHeader() {
  return (
    <>
        <LabelsButton />
        <MilestonesButton />
        <NewIssueButton />
    </>
  );
}

export default IssueHeader;