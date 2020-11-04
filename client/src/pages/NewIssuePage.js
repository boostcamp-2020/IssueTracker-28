import React from 'react';
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
  return (
    <NewIssuePageWrapper>
      <Input />
      <Sidebar>
        <Assignees />
        <Labels />
        <Milestone />
      </Sidebar>
    </NewIssuePageWrapper>
  );
}

export default NewIssuePage;
