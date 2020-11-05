import React from 'react';
import Assignees from '@sidebar/assignees';
import Labels from '@sidebar/labels';
import Milestone from '@sidebar/milestone';
import styled from 'styled-components';

const Sidebar = ({
  selectedAssignees,
  setSelectedAssignees,
  selectedLabels,
  setSelectedLabels,
  selectedMilestone,
  setSelectedMilestone,
}) => {
  const handleAssigneeClick = (assignee) => {
    for (const user of Array.from(selectedAssignees)) {
      if (user.id === assignee.id) return;
    }

    const newAssignees = new Set(selectedAssignees);
    newAssignees.add(assignee);
    setSelectedAssignees(newAssignees);
  };

  const handleLabelClick = (label) => {
    if (selectedLabels.has(label)) return;

    const newLabels = new Set(selectedLabels);
    newLabels.add(label);
    setSelectedLabels(newLabels);
  };

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const SidebarWrapper = styled.div``;

  return (
    <SidebarWrapper>
      <Assignees selectedAssignees={selectedAssignees} handleAssigneeClick={handleAssigneeClick} />
      <Labels selectedLabels={selectedLabels} handleLabelClick={handleLabelClick} />
      <Milestone
        selectedMilestone={selectedMilestone}
        handleMilestoneClick={handleMilestoneClick}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
