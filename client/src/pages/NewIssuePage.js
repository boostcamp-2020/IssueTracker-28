import React, { useState } from 'react';
import Input from '@components/input';
import Header from '@components/header';
import Sidebar from '@components/Sidebar';
import styled from 'styled-components';

const NewIssuePageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px auto;
  max-width: 950px;
  //margin: 24px 160px;
`;

function NewIssuePage() {
  const [selectedAssignees, setSelectedAssignees] = useState(new Set());
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <>
      <Header />
      <NewIssuePageWrapper>
        <Input />
        <Sidebar
          selectedAssignees={selectedAssignees}
          setSelectedAssignees={setSelectedAssignees}
          selectedLabels={selectedLabels}
          setSelectedLabels={setSelectedLabels}
          selectedMilestone={selectedMilestone}
          setSelectedMilestone={setSelectedMilestone}
        />
      </NewIssuePageWrapper>
    </>
  );
}

export default NewIssuePage;
