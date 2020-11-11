import React, { useEffect } from 'react';
import Assignees from '@sidebar/assignees';
import Labels from '@sidebar/labels';
import Milestone from '@sidebar/milestone';
import styled from 'styled-components';
import { useUsersDispatch, getUsers } from '@contexts/UsersContext';
import { useLabelDispatch, getLabels } from '@contexts/LabelContext';
import { useMilestonesDispatch, getMilestones } from '@contexts/MilestonesContext';

const Sidebar = ({ id = null }) => {
  const usersDispatch = useUsersDispatch();
  const labelsDispatch = useLabelDispatch();
  const milestoneDispatch = useMilestonesDispatch();

  const fetchData = () => {
    getUsers(usersDispatch);
    getLabels(labelsDispatch);
    getMilestones(milestoneDispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const SidebarWrapper = styled.div``;

  return (
    <SidebarWrapper>
      <Assignees id={id} />
      <Labels id={id} />
      <Milestone id={id} />
    </SidebarWrapper>
  );
};

export default Sidebar;
