import React from 'react';
import MainContent from '@components/IssueDetail/Content/MainContent';

const Content = ({ issue, comments }) => {
  return (
    <>
      <MainContent issue={issue} comments={comments} />
      {/* <Sidebar /> */}
    </>
  );
};

export default Content;
