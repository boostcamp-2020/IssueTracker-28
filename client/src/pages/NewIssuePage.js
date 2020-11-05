import React, { useState } from 'react';
import Input from '@components/input';
import Assignees from '@components/assignees';
import Labels from '@components/labels';
import Milestone from '@components/milestone';
import styled from 'styled-components';

const NewIssuePageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 160px;
`;

const Sidebar = styled.div``;

function NewIssuePage() {
  const [selectedAssignees, setSelectedAssignees] = useState(new Set());
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleAssigneeClick = (assignee) => {
    for (let user of Array.from(selectedAssignees)) {
      if (user.id === assignee.id) return;
    }

    const newAssignees = new Set(selectedAssignees);
    newAssignees.add(assignee)
    setSelectedAssignees(newAssignees);
  };

  const handleLabelClick = (label) => {
    if (selectedLabels.has(label)) return;

    const newLabels = new Set(selectedLabels);
    newLabels.add(label)
    setSelectedLabels(newLabels);
  };

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  return (
    <NewIssuePageWrapper>
      <Input />
      <Sidebar>
        <Assignees selectedAssignees={selectedAssignees} handleAssigneeClick={handleAssigneeClick} />
        <Labels selectedLabels={selectedLabels} handleLabelClick={handleLabelClick} />
        <Milestone selectedMilestone={selectedMilestone} handleMilestoneClick={handleMilestoneClick} />
      </Sidebar>
    </NewIssuePageWrapper>
  );
}

export default NewIssuePage;
