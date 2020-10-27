import React from 'react';
import { IssueWrapper, IssueContainer, OtherContainer, MilestoneContainer } from './style';

function Issue({ issue }) {
  return (
    <IssueWrapper>
      <input className='issue-checkbox' type='checkbox' />
      <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
      <IssueContainer>
        <div className='title-container'>
          <div className='title'>{issue.title}</div>
          <div className='label-list'>
            {issue.labels.map(label => (
              <div className='label'>{label}</div>
            ))}
          </div>
        </div>
        <OtherContainer>
          <div className='author'>#{issue.id} {issue.status} 12 hours ago by {issue.user}</div>
          <div className='milestone-container'>
            <svg aria-label="Milestone" class="octicon octicon-milestone" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>
            <div className='milestone'>{issue.milestone}</div>
          </div>
        </OtherContainer>
      </IssueContainer>
    </IssueWrapper>
  );
}

export default Issue;