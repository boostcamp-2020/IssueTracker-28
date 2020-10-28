import React from 'react';
import { IssueOpenedIcon, MilestoneIcon } from '@primer/octicons-react';
import { IssueWrapper, IssueContainer, LabelList, OtherContainer, MilestoneContainer } from './style';

function Issue({ issue }) {
  return (
    <IssueWrapper>
      <input className='issue-checkbox' type='checkbox' />
      <IssueOpenedIcon className='issue-open-icon' size={16} />
      <IssueContainer>
        <div className='title-container'>
          <div className='title'>{issue.title}</div>
          <LabelList>
            {issue.labels.map(label => (
              <div className='label'>{label}</div>
            ))}
          </LabelList>
        </div>
        <OtherContainer>
          <div className='author'>#{issue.id} {issue.status} 12 hours ago by {issue.user}</div>
          <MilestoneContainer>
            <MilestoneIcon className='milestone-icon' size={14} />
            <div className='milestone'>{issue.milestone}</div>
          </MilestoneContainer>
        </OtherContainer>
      </IssueContainer>
    </IssueWrapper>
  );
}

export default Issue;

