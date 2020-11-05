import React from 'react';
import { useParams } from 'react-router-dom';
import Content from '@components/IssueDetail/Content';
const IssueDetail = () => {
  const { id } = useParams();

  return <Content />;
};

export default IssueDetail;
