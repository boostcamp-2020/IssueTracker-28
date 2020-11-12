import React from 'react';
import Input from '@components/input';
import Header from '@components/header';
import Sidebar from '@components/sidebar';
import styled from 'styled-components';

const NewIssuePageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px auto;
  max-width: 950px;
`;

function NewIssuePage() {
  return (
    <>
      <Header />
      <NewIssuePageWrapper>
        <Input />
        <Sidebar />
      </NewIssuePageWrapper>
    </>
  );
}

export default NewIssuePage;
