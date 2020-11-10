import React, { useState } from 'react';
import MainContent from '@components/issueDetail/content/mainContent';
import Sidebar from '@components/sidebar';
import S from './style';

const Content = ({ issue, comments }) => {
  const [selectedAssignees, setSelectedAssignees] = useState(new Set());
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <S.ContentWrapper>
      <MainContent issue={issue} comments={comments} />
      <Sidebar
        selectedAssignees={selectedAssignees}
        setSelectedAssignees={setSelectedAssignees}
        selectedLabels={selectedLabels}
        setSelectedLabels={setSelectedLabels}
        selectedMilestone={selectedMilestone}
        setSelectedMilestone={setSelectedMilestone}
      />
    </S.ContentWrapper>
  );
};

export default Content;
