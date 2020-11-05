import React from 'react';
import { useParams } from 'react-router-dom';

const IssueDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>About {id}</h2>
    </div>
  );
};

export default IssueDetail;
