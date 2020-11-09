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
    const assignees = new Set();
    let flag = false;
    for (const user of Array.from(selectedAssignees)) {
      if (user.id !== assignee.id) assignees.add(user);
      else flag = true;
    }

    if (flag) setSelectedAssignees(assignees);
    else {
      const newAssignees = new Set(selectedAssignees);
      newAssignees.add(assignee);
      setSelectedAssignees(newAssignees);
    }
  };

  const handleLabelClick = (label) => {
    const labels = new Set();
    let flag = false;
    for (const selectedLabel of Array.from(selectedLabels)) {
      if (selectedLabel.id !== label.id) labels.add(selectedLabel);
      else flag = true;
    }
    if (flag) setSelectedLabels(labels);
    else {
      const newLabels = new Set(selectedLabels);
      newLabels.add(label);
      setSelectedLabels(newLabels);
    }
  };

  const handleMilestoneClick = (milestone) => {
    console.log(milestone, selectedMilestone);
    if (JSON.stringify(selectedMilestone) === JSON.stringify(milestone)) setSelectedMilestone(null);
    else setSelectedMilestone(milestone);
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
