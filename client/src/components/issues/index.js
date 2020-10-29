import React from 'react';
import IssueHeader from './IssueHeader';
import IssueList from './IssueList';
import { IssuesWrapper } from './style';
import onLogin from '../../api/auth'

function Issues() {
  return (
    <IssuesWrapper>
      <IssueHeader />
      <button onClick={()=>{onLogin()}}>로그인 요청</button>
      <IssueList />
    </IssuesWrapper>
  )
}

export default Issues;

