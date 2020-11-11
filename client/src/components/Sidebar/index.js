import React, { useEffect } from 'react';
import Assignees from '@sidebar/assignees';
import Labels from '@sidebar/labels';
import Milestone from '@sidebar/milestone';
import styled from 'styled-components';
import * as api from '@api/issue';
import { useUsersState, useUsersDispatch, getUsers } from '@contexts/UsersContext';

const Sidebar = ({ id = null }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const fetchData = () => {
    getUsers(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAssigneeClick = async (assignee) => {
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
    if (id) await api.updateIssueAssignee(id, assignee.id, flag);
  };

  const handleLabelClick = async (label) => {
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
    if (id) await api.updateIssueLabel(id, label.id, flag);
  };

  const handleMilestoneClick = async (milestone) => {
    let flag = true;
    if (JSON.stringify(selectedMilestone) === JSON.stringify(milestone)) setSelectedMilestone(null);
    else {
      flag = false;
      setSelectedMilestone(milestone);
    }
    if (id) await api.updateIssueMilestone(id, milestone.id, flag);
  };

  const SidebarWrapper = styled.div``;

  return (
    <SidebarWrapper>
      <Assignees />
      {/* <Labels handleLabelClick={handleLabelClick} />
      <Milestone handleMilestoneClick={handleMilestoneClick} /> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
