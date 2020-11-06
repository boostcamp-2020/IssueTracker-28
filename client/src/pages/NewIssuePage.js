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
`;

function NewIssuePage() {
  const [selectedAssignees, setSelectedAssignees] = useState(new Set());
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const getAssigneesId = () => {
    return Array.from(selectedAssignees).reduce((acc, cur) => {
      acc.push(cur.id);
      return acc;
    }, []);;
  };

  const getLabelsId = () => {
    return Array.from(selectedLabels).reduce((acc, cur) => {
      acc.push(cur.id);
      return acc;
    }, []);;
  };

  return (
    <>
      <Header />
      <NewIssuePageWrapper>
        <Input
          selectedAssignees={selectedAssignees && getAssigneesId()}
          selectedLabels={selectedLabels && getLabelsId()}
          selectedMilestone={selectedMilestone && selectedMilestone.id} 
        />
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
