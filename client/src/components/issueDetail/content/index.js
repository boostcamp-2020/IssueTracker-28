import React, { useEffect } from 'react';
import MainContent from '@components/issueDetail/content/main';
import Sidebar from '@components/sidebar';
import { useUsersDispatch } from '@contexts/UsersContext';
import { useLabelDispatch } from '@contexts/LabelContext';
import { useMilestonesDispatch } from '@contexts/MilestonesContext';
import S from './style';

const Content = ({ issue, comments }) => {
  const usersDispatch = useUsersDispatch();
  const labelsDispatch = useLabelDispatch();
  const milestoneDispatch = useMilestonesDispatch();

  useEffect(() => {
    usersDispatch({ type: 'UPDATE_SELECTED_USERS', data: issue.assignees });
    labelsDispatch({ type: 'UPDATE_SELECTED_LABELS', data: issue.labels });
    const milestone = issue.milestone.title ? issue.milestone : null;
    milestoneDispatch({ type: 'UPDATE_SELECTED_MILESTONE', data: milestone });
  }, []);

  return (
    <S.ContentWrapper>
      <MainContent issue={issue} comments={comments} />
      <Sidebar id={issue.id} />
    </S.ContentWrapper>
  );
};

export default Content;
